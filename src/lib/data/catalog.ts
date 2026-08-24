import {
	Goal,
	Office,
	PlayerCard,
	type Card,
	type GoalData,
	type OfficeData,
	type PlayerCardData
} from '$lib/models/cards';

class CardsCatalog {
	private cards: Record<string, Card> = {};

	load<D>(records: Record<string, D>, cardConstructor: new (id: string, data: D) => Card) {
		for (const [path, data] of Object.entries(records)) {
			const id = pathToId(path);
			const card = new cardConstructor(id, data);
			console.log(path, id, card);
			this.cards[id] = card;
		}
	}

	all(): Array<Card> {
		return Object.values(this.cards);
	}
}

function pathToId(path: string) {
	const start = path.lastIndexOf('/') + 1;
	const end = path.lastIndexOf('.');
	return path.substring(start, end);
}

export const cardsCatalog = new CardsCatalog();

cardsCatalog.load(
	import.meta.glob<OfficeData>(`./offices/**/*.ts`, {
		eager: true,
		import: 'default'
	}),
	Office
);

cardsCatalog.load(
	import.meta.glob<GoalData>(`./goals/**/*.ts`, {
		eager: true,
		import: 'default'
	}),
	Goal
);

cardsCatalog.load(
	import.meta.glob<PlayerCardData>(`./player-cards/**/*.ts`, {
		eager: true,
		import: 'default'
	}),
	PlayerCard
);
