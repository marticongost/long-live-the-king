<script lang="ts" module>
	import { getKingdomStat, type KingdomStatType } from '$lib/models/kingdomstats';
	import * as css from '$lib/styles';
	import InlineSvg from './InlineSvg.svelte';

	const styles = css.styles({
		kingdomStatDisplay: {},
		icon: {
			height: '1.2em',
			backgroundColor: css.palette.wood,
			color: css.palette.white,
			padding: '0.2em',
			borderRadius: '0.4em'
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
	<InlineSvg class={styles.icon} src="kingdom-stats/{kingdomStat}.svg" />
	<span class={styles.name}>
		{getKingdomStat(kingdomStat).title}
	</span>
</span>
