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
	import { standardAttributes, type StandardAttributeProps } from './utils';
	import type { Card } from '$lib/models/cards';
	import type { PropertyId } from '$lib/models/properties';
	import { countByOption, countByProperty, filterCards } from '$lib/search';
	import CardGrid from './CardGrid.svelte';
	import CardSearchControls from './CardSearchControls.svelte';

	interface Props extends StandardAttributeProps {
		cards: Array<Card>;
	}

	const { cards, ...attributes }: Props = $props();

	let search = $state('');
	let selectedFilter = $state('all');
	let selectedProperties = $state<Array<PropertyId>>([]);

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
