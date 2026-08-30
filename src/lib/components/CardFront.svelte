<script lang="ts" module>
	import * as css from '$lib/styles';

	const cardWidth = 63;
	const cardHeight = 88;

	function cw(percent: number) {
		return `${(cardWidth * percent) / 100}mm`;
	}

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
			...css.column('sm'),
			padding: css.spacing.sm,
			flex: '1 1 auto',
			[variant('office')]: {
				paddingTop: css.spacing.md
			}
		},
		footer: {
			...css.row('md'),
			...css.hpadding('sm'),
			height: '8mm',
			backgroundColor: css.palette.carrara
		},
		discardBonus: {
			marginLeft: 'auto'
		},
		properties: {
			margin: 0,
			listStyleType: 'none',
			color: css.text.subtleColor,
			lineHeight: '1em'
		},
		propertyEntry: {
			margin: 0,
			fontSize: '0.8em',
			display: 'inline',
			'&:not(:last-child):after': {
				content: '", "'
			}
		},
		publicCard: {
			...css.row('sm')
		},
		publicCardIcon: {
			flexShrink: 0,
			width: '1em',
			height: 'auto',
			color: css.palette.dawn
		},
		publicCardText: {
			fontSize: '0.8em',
			fontWeight: 'bold',
			color: css.palette.sandal
		}
	});

	function getIcon(card: Card): string {
		if (card instanceof Office) {
			return `offices/${card.id}.svg`;
		} else if (card instanceof Goal) {
			return `goals/${card.id}.svg`;
		} else if (card instanceof Event) {
			return `events/${card.id}.svg`;
		} else if (card instanceof Law) {
			return `laws/${card.id}.svg`;
		} else if (card instanceof Tactic) {
			return `tactics/${card.id}.svg`;
		} else if (card instanceof Asset) {
			return `assets/${card.id}.svg`;
		}
		throw new Error(`Unknown card type ${card.constructor.name}`);
	}

	function getBackgroundImage(card: Card): string {
		if (card instanceof Asset && card.hidden) {
			return 'url(/svg/card-backgrounds/hidden-asset.svg)';
		}
		return `url(/svg/card-backgrounds/${card.type}.svg)`;
	}
</script>

<script lang="ts">
	import { standardAttributes, type StandardAttributeProps } from '$lib/components/utils';
	import {
		Asset,
		cardTypes,
		Event,
		Goal,
		Law,
		Office,
		Tactic,
		type Card,
		type CardType
	} from '$lib/models/cards';
	import { resourceTypes } from '$lib/models/resources';
	import CapabilityDisplay from './CapabilityDisplay.svelte';
	import InlineSvg from './InlineSvg.svelte';
	import ResourceDisplay from './ResourceDisplay.svelte';

	interface Props extends StandardAttributeProps {
		card: Card;
	}

	const { card, ...attributes }: Props = $props();
	const icon = $derived(getIcon(card));
	const styles = $derived(stylesFor(card.type));
</script>

<div
	{...standardAttributes(attributes, styles.card)}
	data-type={card.type}
	style:background-image={getBackgroundImage(card)}
>
	<div class={styles.header}>
		<div class={styles.title}>{card.title}</div>
		<div class={styles.iconFrame}>
			<InlineSvg class={styles.icon} src={icon} />
		</div>
	</div>
	<div class={styles.body}>
		{#if !card.hidden}
			<div class={styles.publicCard}>
				<InlineSvg class={styles.publicCardIcon} src="keywords/visible.svg" />
				<span class={styles.publicCardText}>Carta visible</span>
			</div>
		{/if}
		{#each card.capabilities as capability, index (index)}
			<CapabilityDisplay {capability} />
		{/each}
	</div>
	<div class={styles.footer}>
		<ul class={styles.properties}>
			{#each card.properties as property (property.id)}
				<li class={styles.propertyEntry}>{property.title}</li>
			{/each}
		</ul>
		{#if !card.discardBonus.empty()}
			<div class={styles.discardBonus}>
				{#each resourceTypes as resourceType (resourceType)}
					{#each { length: card.discardBonus[resourceType] } as _, index (index)}
						<ResourceDisplay resource={resourceType} />
					{/each}
				{/each}
			</div>
		{/if}
	</div>
</div>
