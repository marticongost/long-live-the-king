<script lang="ts" module>
	import * as css from '$lib/styles';
	import { Event, Goal, Law, Tactic } from '$lib/models/cards';

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

	function needsCapabilityCard(card: Card, capability: Capability) {
		if (capability instanceof Reaction) {
			return card instanceof Tactic;
		}
		if (card instanceof Event || card instanceof Goal || card instanceof Law) {
			return capability instanceof Action || capability instanceof Secret;
		}
		return true;
	}
</script>

<script lang="ts">
	import { standardAttributes, type StandardAttributeProps } from './utils';
	import type { Card } from '$lib/models/cards';
	import { getBrowserCardSearchState } from '$lib/browsercardsearchstate.svelte';
	import CardSearchControls from './CardSearchControls.svelte';
	import CapabilitiesGrid from './CapabilitiesGrid.svelte';
	import { CardCapability } from '$lib/models/cardcapabilities';
	import { Action, Reaction, Secret, type Capability } from '$lib/models/capabilities';

	interface Props extends StandardAttributeProps {
		cards: Array<Card>;
	}

	const { cards, ...attributes }: Props = $props();

	const searchState = getBrowserCardSearchState(() => cards);
	const cardCapabilities = $derived(
		searchState.filteredCards.flatMap((card) =>
			card.capabilities
				.filter((capability) => needsCapabilityCard(card, capability))
				.map((capability, index) => new CardCapability(card, capability, index))
		)
	);
</script>

<div {...standardAttributes(attributes, styles.browser)}>
	<CardSearchControls
		bind:search={searchState.search}
		bind:selectedFilter={searchState.selectedFilter}
		bind:selectedProperties={searchState.selectedProperties}
		counts={searchState.optionCounts}
		propertyCounts={searchState.propertyCounts}
	/>

	<section class={styles.results}>
		{#if searchState.filteredCards.length}
			<CapabilitiesGrid {cardCapabilities} />
		{:else}
			<p class={styles.noResultsNotice}>
				No s'ha trobat cap carta que coincideixi amb els filtres indicats.
			</p>
		{/if}
	</section>
</div>
