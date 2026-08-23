<script lang="ts" module>
	import type { KingdomStat } from '$lib/models/kingdomstats';
	import * as css from '$lib/styles';
	import InlineSvg from './InlineSvg.svelte';

	const styles = css.styles({
		kingdomStatDisplay: {},
		icon: {},
		amount: {}
	});
</script>

<script lang="ts">
	import { standardAttributes, type StandardAttributeProps } from './utils';

	interface Props extends StandardAttributeProps {
		stat: KingdomStat;
		amount?: number;
	}

	const { stat, amount = 0, ...attributes }: Props = $props();
</script>

<span {...standardAttributes(attributes, styles.kingdomStatDisplay)}>
	<InlineSvg class={styles.icon} src="kingdom-stats/{stat}.svg" />
	{#if amount}
		<span class={styles.amount}>
			{#if amount > 0}+{/if}
			{amount}
		</span>
	{/if}
</span>
