<script lang="ts" module>
	import * as css from '$lib/styles';

	const cardWidth = 63;
	const cardHeight = 88;

	function cw(percent: number) {
		return `${(cardWidth * percent) / 100}mm`;
	}

	function ch(percent: number) {
		return `${(cardHeight * percent) / 100}mm`;
	}

	const styles = css.styles({
		card: {
			...css.column,
			position: 'relative',
			fontFamily: css.fonts.text,
			backgroundColor: css.palette.white,
			color: css.text.regularColor,
			width: `${cardWidth}mm`,
			height: `${cardHeight}mm`,
			"&[data-type='office']": {
				'--header-background-color': css.palette.pinkSwan
			},
			"&[data-type='player-card']": {
				'--header-background-color': css.palette.green
			}
		},
		header: {
			...css.row('sm'),
			position: 'relative',
			backgroundColor: 'var(--header-background-color)',
			height: ch(10)
		},
		title: {
			width: '100%',
			fontWeight: 900,
			color: css.text.headingColor,
			margin: 0,
			textAlign: 'center'
		},
		iconFrame: {
			position: 'relative',
			alignSelf: 'flex-start',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center'
		},
		officeIconFrame: {
			position: 'absolute',
			left: 0,
			top: 0,
			width: cw(20),
			height: cw(20)
		},
		playerCardIconFrame: {
			backgroundColor: 'var(--header-background-color)'
		},
		officeDecoration: {
			position: 'absolute',
			left: 0,
			top: 0,
			width: '100%',
			height: '100%',
			zIndex: 1
		},
		playerCardDecoration: {
			position: 'absolute',
			left: 0,
			top: '60%',
			width: '100%',
			height: 'auto',
			color: 'var(--header-background-color)'
		},
		icon: {
			position: 'relative',
			width: '20%',
			height: 'auto',
			zIndex: 2,
			color: css.palette.white
		},
		officeIcon: {
			width: '60%',
			top: '-10%'
		},
		body: {},
		officeBody: {
			paddingTop: css.spacing.md
		},
		playerCardBody: {
			paddingTop: css.spacing.lg
		}
	});

	function getType(card: Card): 'office' | 'player-card' {
		if (card instanceof Office) {
			return 'office';
		} else if (card instanceof PlayerCard) {
			return 'player-card';
		}
		throw new Error(`Unknown card type ${card.constructor.name}`);
	}

	function getIcon(card: Card): string {
		if (card instanceof Office) {
			return `offices/${card.id}.svg`;
		} else if (card instanceof PlayerCard) {
			return `player-cards/${card.id}.svg`;
		}
		throw new Error(`Unknown card type ${card.constructor.name}`);
	}
</script>

<script lang="ts">
	import { standardAttributes, type StandardAttributeProps } from '$lib/components/utils';
	import { Office, PlayerCard, type Card } from '$lib/models/cards';
	import CapabilityDisplay from './CapabilityDisplay.svelte';
	import InlineSvg from './InlineSvg.svelte';
	import { cx } from '@emotion/css';

	interface Props extends StandardAttributeProps {
		card: Card;
	}

	const { card, ...attributes }: Props = $props();
	const icon = $derived(getIcon(card));
	const isOffice = $derived(card instanceof Office);
	const isPlayerCard = $derived(card instanceof PlayerCard);
</script>

<div {...standardAttributes(attributes, styles.card)} data-type={getType(card)}>
	<div class={styles.header}>
		<div class={styles.title}>{card.title}</div>
	</div>
	<div
		class={cx(styles.iconFrame, {
			[styles.officeIconFrame]: isOffice,
			[styles.playerCardIconFrame]: isPlayerCard
		})}
	>
		{#if isOffice}
			<InlineSvg class={styles.officeDecoration} src="decorations/office-ribbon.svg" />
		{:else if isPlayerCard}
			<InlineSvg class={styles.playerCardDecoration} src="decorations/player-card-header.svg" />
		{/if}
		<InlineSvg class={cx(styles.icon, { [styles.officeIcon]: isOffice })} src={icon} />
	</div>
	<div
		class={cx(styles.body, {
			[styles.officeBody]: isOffice,
			[styles.playerCardBody]: isPlayerCard
		})}
	>
		{#each card.capabilities as capability, index (index)}
			<CapabilityDisplay {capability} />
		{/each}
	</div>
</div>
