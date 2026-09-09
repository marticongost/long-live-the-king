<script lang="ts" module>
	import * as css from '$lib/styles';

	const styles = css.styles({
		browser: {
			...css.row('xl'),
			alignItems: 'flex-start'
		},
		results: {
			...css.column('sm'),
			flex: '1 1 auto',
			minWidth: 0
		},
		noResultsNotice: {}
	});
</script>

<script lang="ts">
	import { page } from '$app/state';
	import { replaceState } from '$app/navigation';
	import type { ResolvedPathname } from '$app/types';
	import { standardAttributes, type StandardAttributeProps } from './utils';
	import type { Card } from '$lib/models/cards';
	import { getProperties, type PropertyId } from '$lib/models/properties';
	import { countByOption, countByProperty, filterCards, findFilterOption } from '$lib/search';
	import CardGrid from './CardGrid.svelte';
	import CardSearchControls from './CardSearchControls.svelte';

	interface Props extends StandardAttributeProps {
		cards: Array<Card>;
	}

	const { cards, ...attributes }: Props = $props();

	const params = page.url.searchParams;
	const validPropertyIds = new Set(getProperties().map((property) => property.id));
	const filterParam = params.get('filter');

	let search = $state(params.get('q') ?? '');
	let selectedFilter = $state(filterParam && findFilterOption(filterParam) ? filterParam : 'all');
	let selectedProperties = $state<Array<PropertyId>>(
		params.getAll('p').filter((id): id is PropertyId => validPropertyIds.has(id as PropertyId))
	);

	function currentHref(): ResolvedPathname {
		const url = new URL(page.url);

		if (search) url.searchParams.set('q', search);
		else url.searchParams.delete('q');

		if (selectedFilter && selectedFilter !== 'all') url.searchParams.set('filter', selectedFilter);
		else url.searchParams.delete('filter');

		url.searchParams.delete('p');
		for (const id of selectedProperties) url.searchParams.append('p', id);

		return (page.url.pathname + url.search) as ResolvedPathname;
	}

	$effect(() => {
		const href = currentHref();
		if (href === page.url.pathname + page.url.search) return;
		replaceState(href, {});
	});

	const optionCounts = $derived(countByOption(cards, search, selectedProperties));
	const propertyCounts = $derived(
		countByProperty(cards, search, selectedFilter, selectedProperties)
	);
	const filteredCards = $derived(filterCards(cards, search, selectedFilter, selectedProperties));
</script>

<div {...standardAttributes(attributes, styles.browser)}>
	<CardSearchControls
		bind:search
		bind:selectedFilter
		bind:selectedProperties
		counts={optionCounts}
		{propertyCounts}
	/>

	<section class={styles.results}>
		{#if filteredCards.length}
			<CardGrid cards={filteredCards} />
		{:else}
			<p class={styles.noResultsNotice}>
				No s'ha trobat cap carta que coincideixi amb els filtres indicats.
			</p>
		{/if}
	</section>
</div>
