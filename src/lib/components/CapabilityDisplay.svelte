<script lang="ts" module>
	import { ConcreteCapability, Constant, type Capability } from '$lib/models/capabilities';
	import * as css from '$lib/styles';

	const variants = css.styleVariants(['regular', 'reaction']);

	const stylesFor = css.multipleStyles({
		capabilityDisplay: {
			lineHeight: '1em'
		},
		entry: {
			...css.column()
		},
		icon: {
			flexShrink: 0,
			height: '1.1em',
			width: 'auto',
			color: css.palette.dawn
		},
		header: {
			...css.row('sm'),
			color: css.palette.wood,
			marginBottom: '0.1em',
			paddingBottom: '0.1em',
			borderBottom: `1px solid ${css.palette.blush}`
		},
		title: {
			fontSize: '0.85em',
			fontFamily: css.fonts.heading,
			margin: 0,
			fontWeight: 600,
			marginRight: 'auto',
			[variants('regular')]: {
				fontWeight: 900
			},
			[variants('reaction')]: {
				fontStyle: 'italic'
			}
		},
		subtitle: {
			fontSize: '0.75em'
		},
		cost: {
			fontSize: '0.75em'
		},
		body: {
			fontSize: '0.8em'
		},
		restrictions: {
			display: 'block',
			fontStyle: 'italic',
			marginBottom: css.spacing.xs,
			color: css.palette.red
		},
		crisisTest: {
			...css.row('sm'),
			padding: css.spacing.sm,
			borderRadius: css.spacing.xs,
			border: `1px solid ${css.palette.twine}`,
			borderLeftWidth: '3px',
			marginTop: css.spacing.xs
		},
		crisisOutcome: {
			...css.row('sm'),
			alignItems: 'flex-start',
			border: '1px solid currentColor',
			borderRadius: css.spacing.xs,
			borderLeftWidth: '3px',
			padding: css.spacing.sm
		},
		reward: {
			color: css.palette.grass
		},
		penalty: {
			color: css.palette.rose
		},
		crisisOutcomeIcon: {
			flex: '0 0 auto',
			position: 'relative',
			top: '0.2em'
		},
		crisisBody: {
			fontSize: '0.8em',
			...css.column('sm')
		},
		crisisOutcomeValue: {
			color: css.text.regularColor
		}
	});
</script>

<script lang="ts">
	import { standardAttributes, type StandardAttributeProps } from './utils';
	import EffectsText from './EffectsText.svelte';
	import InlineSvg from './InlineSvg.svelte';
	import CostDisplay from './CostDisplay.svelte';
	import { cx } from '@emotion/css';
	import {
		getCapabilityIcon,
		getCapabilitySubtitle,
		getCapabilityTitle
	} from '$lib/cardattributes';

	interface Props extends StandardAttributeProps {
		capability: Capability;
	}

	const { capability, ...attributes }: Props = $props();
	const styles = $derived(stylesFor(capability.type === 'reaction' ? 'reaction' : 'regular'));
</script>

<div {...standardAttributes(attributes, styles.capabilityDisplay)}>
	<div class={styles.entry}>
		{#if capability.type === 'crisis'}
			<div class={styles.header}>
				<div class={styles.title}>Crisis</div>
				<InlineSvg class={styles.icon} src="capabilities/crisis.svg" />
			</div>
			<div class={styles.crisisBody}>
				<div class={styles.crisisTest}>
					<EffectsText effects={capability.test} />
					≥
					<EffectsText effects={capability.difficulty} />
				</div>
				<div class={cx(styles.crisisOutcome, styles.reward)}>
					<InlineSvg class={styles.crisisOutcomeIcon} src="capabilities/reward.svg" />
					<EffectsText
						class={styles.crisisOutcomeValue}
						effects={capability.highestContributionReward}
					/>
				</div>
				<div class={cx(styles.crisisOutcome, styles.penalty)}>
					<InlineSvg class={styles.crisisOutcomeIcon} src="capabilities/penalty.svg" />
					<EffectsText class={styles.crisisOutcomeValue} effects={capability.penalty} />
				</div>
			</div>
		{:else if capability instanceof ConcreteCapability || capability instanceof Constant}
			{@const title = getCapabilityTitle(capability)}
			{@const subtitle = getCapabilitySubtitle(capability)}
			<div class={styles.header}>
				<div class={styles.title}>
					{title}
				</div>
				{#if subtitle}
					<span class={styles.subtitle}>
						<InlineSvg class={styles.icon} src={getCapabilityIcon(capability)} />
						{subtitle}
					</span>
				{/if}
				{#if capability instanceof ConcreteCapability && !capability.cost.empty()}
					<CostDisplay class={styles.cost} cost={capability.cost} />
				{/if}
			</div>
			<div class={styles.body}>
				{#if capability instanceof ConcreteCapability && capability.restrictions}
					<div class={styles.restrictions}>
						<EffectsText effects={capability.restrictions} />
					</div>
				{/if}
				<EffectsText effects={capability.effects} />
			</div>
		{/if}
	</div>
</div>
