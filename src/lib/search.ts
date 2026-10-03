import { cardTypes, type Card } from './models/cards';
import { getProperties, getProperty, type Property, type PropertyId } from './models/properties';

export type FilterOption = {
	kind: 'option';
	id: string;
	title: string;
	matches: (card: Card) => boolean;
};

export type FilterGroup = {
	kind: 'group';
	id: string;
	title: string;
	options: ReadonlyArray<FilterOption>;
};

export type FilterEntry = FilterOption | FilterGroup;

const unsortedFilterEntries: Array<FilterEntry> = [
	{ kind: 'option', id: 'all', title: 'Qualsevol', matches: () => true },
	{
		kind: 'option',
		id: 'common',
		title: getProperty('common').title,
		matches: (card) => card.type === 'common'
	},
	{
		kind: 'option',
		id: 'office',
		title: getProperty('office').title,
		matches: (card) => card.type === 'office'
	},
	{
		kind: 'group',
		id: 'goals',
		title: 'Objectius',
		options: [
			{
				kind: 'option',
				id: 'goal',
				title: 'Objectiu',
				matches: (card) => card.type === 'goal'
			},
			{
				kind: 'option',
				id: 'goal-collective',
				title: 'Objectiu (col·lectiu)',
				matches: (card) => card.type === 'goal' && card.goalType === 'collective'
			},
			{
				kind: 'option',
				id: 'goal-personal',
				title: 'Objectiu (personal)',
				matches: (card) => card.type === 'goal' && card.goalType === 'personal'
			}
		]
	},
	{
		kind: 'option',
		id: 'event',
		title: getProperty('event').title,
		matches: (card) => card.type === 'event'
	},
	{
		kind: 'option',
		id: 'law',
		title: getProperty('law').title,
		matches: (card) => card.type === 'law'
	},
	{
		kind: 'option',
		id: 'tactic',
		title: getProperty('tactic').title,
		matches: (card) => card.type === 'tactic'
	},
	{
		kind: 'group',
		id: 'assets',
		title: 'Actiu',
		options: [
			{
				kind: 'option',
				id: 'asset',
				title: 'Actiu',
				matches: (card) => card.type === 'asset'
			},
			{
				kind: 'option',
				id: 'asset-visible',
				title: 'Actiu (visible)',
				matches: (card) => card.type === 'asset' && !card.hidden
			},
			{
				kind: 'option',
				id: 'asset-hidden',
				title: 'Actiu (ocult)',
				matches: (card) => card.type === 'asset' && card.hidden
			}
		]
	},
	{
		kind: 'option',
		id: 'house',
		title: getProperty('house').title,
		matches: (card) => card.type === 'house'
	}
];

export const filterEntries: ReadonlyArray<FilterEntry> = unsortedFilterEntries.sort((a, b) => {
	// Keep "Qualsevol" first, then sort the rest alphabetically.
	if (a.id === 'all') return -1;
	if (b.id === 'all') return 1;
	return a.title.localeCompare(b.title, 'ca', { sensitivity: 'base' });
});

const typePropertyIds = new Set<string>(cardTypes);

export const filterableProperties: ReadonlyArray<Property> = getProperties()
	.filter((property) => !typePropertyIds.has(property.id))
	.sort((a, b) => a.title.localeCompare(b.title, 'ca', { sensitivity: 'base' }));

export function searchTerms(query: string): Array<string> {
	return query.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
}

export function matchesSearch(card: Card, terms: Array<string>): boolean {
	if (terms.length === 0) return true;
	const haystack = [card.title, ...[...card.properties].map((property) => property.title)]
		.join(' ')
		.toLocaleLowerCase();
	return terms.every((term) => haystack.includes(term));
}

export function matchingCards(cards: Array<Card>, query: string): Array<Card> {
	const terms = searchTerms(query);
	return cards
		.filter((card) => matchesSearch(card, terms))
		.sort((a, b) => a.title.localeCompare(b.title, 'ca', { sensitivity: 'base' }));
}

function allOptions(entries: ReadonlyArray<FilterEntry>): Array<FilterOption> {
	const options: Array<FilterOption> = [];
	for (const entry of entries) {
		if (entry.kind === 'group') options.push(...entry.options);
		else options.push(entry);
	}
	return options;
}

export function findFilterOption(id: string): FilterOption | undefined {
	return allOptions(filterEntries).find((option) => option.id === id);
}

export function cardsWithProperties(
	cards: Array<Card>,
	selectedProperties: ReadonlyArray<PropertyId>
): Array<Card> {
	if (selectedProperties.length === 0) return cards;
	const required = new Set(selectedProperties);
	return cards.filter((card) => {
		const properties = card.properties;
		for (const id of required) {
			if (!properties.has(getProperty(id))) return false;
		}
		return true;
	});
}

export function filterCards(
	cards: Array<Card>,
	query: string,
	selectedFilter: string,
	selectedProperties: ReadonlyArray<PropertyId>
): Array<Card> {
	const option = findFilterOption(selectedFilter);
	const matches = matchingCards(cards, query);
	const typed = option ? matches.filter(option.matches) : matches;
	return cardsWithProperties(typed, selectedProperties);
}

export function countByOption(
	cards: Array<Card>,
	query: string,
	selectedProperties: ReadonlyArray<PropertyId>
): Map<string, number> {
	const options = allOptions(filterEntries);
	const counts = new Map<string, number>();
	for (const option of options) counts.set(option.id, 0);
	for (const card of cardsWithProperties(matchingCards(cards, query), selectedProperties)) {
		for (const option of options) {
			if (option.matches(card)) {
				counts.set(option.id, (counts.get(option.id) ?? 0) + 1);
			}
		}
	}
	return counts;
}

export function countByProperty(
	cards: Array<Card>,
	query: string,
	selectedFilter: string,
	selectedProperties: ReadonlyArray<PropertyId>
): Map<PropertyId, number> {
	const option = findFilterOption(selectedFilter);
	const matches = matchingCards(cards, query);
	const typed = option ? matches.filter(option.matches) : matches;
	const scoped = cardsWithProperties(typed, selectedProperties);
	const counts = new Map<PropertyId, number>();
	for (const property of filterableProperties) counts.set(property.id, 0);
	for (const card of scoped) {
		const properties = card.properties;
		for (const property of filterableProperties) {
			if (properties.has(property)) {
				counts.set(property.id, (counts.get(property.id) ?? 0) + 1);
			}
		}
	}
	return counts;
}

export function getVisibleOptionIds(cards: Array<Card>): ReadonlySet<string> {
	const ids = new Set<string>(['all']);
	const options = allOptions(filterEntries);
	for (const card of cards) {
		for (const option of options) {
			if (option.matches(card)) {
				ids.add(option.id);
			}
		}
	}
	return ids;
}

export function getVisiblePropertyIds(cards: Array<Card>): ReadonlySet<PropertyId> {
	const ids = new Set<PropertyId>();
	for (const card of cards) {
		for (const property of filterableProperties) {
			if (card.properties.has(property)) {
				ids.add(property.id);
			}
		}
	}
	return ids;
}
