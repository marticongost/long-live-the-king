<script lang="ts" module>
	import { getKingdomStat, type KingdomStatType } from '$lib/models/kingdomstats';
	import * as css from '$lib/styles';
	import InlineSvg from './InlineSvg.svelte';

	const styles = css.styles({
		kingdomStatDisplay: {},
		icon: {
			color: css.palette.wood
		},
		name: {
			fontWeight: 'bold'
		}
	});
</script>

<script lang="ts">
	import { standardAttributes, type StandardAttributeProps } from './utils';

	interface Props extends StandardAttributeProps {
		stat: KingdomStatType;
		amount?: number;
	}

	const { stat: kingdomStat, ...attributes }: Props = $props();
</script>

<span {...standardAttributes(attributes, styles.kingdomStatDisplay)}>
	<InlineSvg class={styles.icon} src="kingdomStats/{kingdomStat}.svg" />
	<span class={styles.name}>
		{getKingdomStat(kingdomStat).title}
	</span>
</span>
