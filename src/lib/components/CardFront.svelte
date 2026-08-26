<script lang="ts" module>
	import * as css from '$lib/styles';

	const cardWidth = 63;
	const cardHeight = 88;

	function cw(percent: number) {
		return `${(cardWidth * percent) / 100}mm`;
	}

	const cardTypes = ['office', 'goal', 'event', 'law', 'player-card'] as const;
	type CardType = (typeof cardTypes)[number];

	const variant = css.styleVariants<CardType>(cardTypes);

	const stylesFor = css.multipleStyles({
		card: {
			...css.column(),
			position: 'relative',
			fontFamily: css.fonts.text,
			backgroundColor: css.palette.white,
			color: css.text.regularColor,
			width: `${cardWidth}mm`,
			height: `${cardHeight}mm`
		},
		header: {
			...css.column(),
			position: 'relative',
			color: css.palette.white,
			height: '32mm',
			[variant('office')]: {
				height: '9.4mm',
				justifyContent: 'center'
			}
		},
		title: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			height: '9.4mm',
			width: '100%',
			fontWeight: 900,
			margin: 0,
			textAlign: 'center'
		},
		iconFrame: {
			position: 'relative',
			alignSelf: 'flex-start',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			[variant('office')]: {
				position: 'absolute',
				left: 0,
				top: 0,
				width: cw(20),
				height: cw(20)
			}
		},
		icon: {
			position: 'relative',
			width: '20%',
			height: 'auto',
			zIndex: 2,
			color: css.palette.white,
			[variant('office')]: {
				width: '60%',
				top: '-10%'
			}
		},
		body: {
			flex: '1 1 auto',
			[variant('office')]: {
				paddingTop: css.spacing.md
			}
		},
		footer: {
			...css.row('md')
		},
		discardBonus: {
			marginLeft: 'auto',
			padding: css.spacing.xs,
			backgroundColor: css.palette.stone,
			borderTopLeftRadius: css.spacing.md
		}
	});

	function getType(card: Card): CardType {
		if (card instanceof Office) {
			return 'office';
		} else if (card instanceof Goal) {
			return 'goal';
		} else if (card instanceof Event) {
			return 'event';
		} else if (card instanceof Law) {
			return 'law';
		} else if (card instanceof PlayerCard) {
			return 'player-card';
		}
		throw new Error(`Unknown card type ${card.constructor.name}`);
	}

	function getIcon(card: Card): string {
		if (card instanceof Office) {
			return `offices/${card.id}.svg`;
		} else if (card instanceof Goal) {
			return `goals/${card.id}.svg`;
		} else if (card instanceof Event) {
			return `events/${card.id}.svg`;
		} else if (card instanceof Law) {
			return `laws/${card.id}.svg`;
		} else if (card instanceof PlayerCard) {
			return `player-cards/${card.id}.svg`;
		}
		throw new Error(`Unknown card type ${card.constructor.name}`);
	}
</script>

<script lang="ts">
	import { standardAttributes, type StandardAttributeProps } from '$lib/components/utils';
	import { Event, Goal, Law, Office, PlayerCard, type Card } from '$lib/models/cards';
	import { resourceTypes } from '$lib/models/resources';
	import CapabilityDisplay from './CapabilityDisplay.svelte';
	import InlineSvg from './InlineSvg.svelte';
	import ResourceDisplay from './ResourceDisplay.svelte';

	interface Props extends StandardAttributeProps {
		card: Card;
	}

	const { card, ...attributes }: Props = $props();
	const type = $derived(getType(card));
	const icon = $derived(getIcon(card));
	const styles = $derived(stylesFor(type));
</script>

<div
	{...standardAttributes(attributes, styles.card)}
	data-type={type}
	style:background-image="url(/svg/card-backgrounds/{type}.svg)"
>
	<div class={styles.header}>
		<div class={styles.title}>{card.title}</div>
		<div class={styles.iconFrame}>
			<InlineSvg class={styles.icon} src={icon} />
		</div>
	</div>
	<div class={styles.body}>
		{#each card.capabilities as capability, index (index)}
			<CapabilityDisplay {capability} />
		{/each}
	</div>
	<div class={styles.footer}>
		{#if !card.discardBonus.empty()}
			<div class={styles.discardBonus}>
				{#each resourceTypes as resourceType (resourceType)}
					{#each { length: card.discardBonus[resourceType] } as n (n)}
						<ResourceDisplay resource={resourceType} />
					{/each}
				{/each}
			</div>
		{/if}
	</div>
</div>
