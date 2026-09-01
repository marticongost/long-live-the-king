<script lang="ts" module>
	import {
		Action,
		BaseAction,
		ConcreteCapability,
		Constant,
		Crisis,
		Reaction,
		Secret,
		type Capability
	} from '$lib/models/capabilities';
	import * as css from '$lib/styles';

	const variants = css.styleVariants(['regular', 'actionLike']);

	const stylesFor = css.multipleStyles({
		capabilityDisplay: {
			lineHeight: '1em'
		},
		entry: {
			...css.row('sm'),
			alignItems: 'flex-start'
		},
		icon: {
			flexShrink: 0,
			width: '1em',
			height: 'auto',
			color: css.palette.dawn
		},
		details: {
			flex: '1 1 auto'
		},
		header: {
			...css.row(),
			color: css.palette.wood,
			marginBottom: '0.1em',
			paddingBottom: '0.1em',
			borderBottom: `1px solid ${css.palette.blush}`
		},
		heading: {
			...css.row('xs'),
			marginRight: 'auto'
		},
		title: {
			fontSize: '0.85em',
			fontFamily: css.fonts.heading,
			margin: 0,
			fontWeight: 600,
			[variants('actionLike')]: {
				fontWeight: 900
			},
			[variants('regular')]: {
				fontStyle: 'italic'
			}
		},
		subtitle: {
			fontSize: '0.7em',
			':before': {
				content: '"("'
			},
			':after': {
				content: '")"'
			}
		},
		cost: {
			fontSize: '0.9em'
		},
		body: {
			fontSize: '0.8em'
		},
		crisisOutcome: {
			...css.row('sm'),
			alignItems: 'flex-start',
			border: '1px solid currentColor',
			padding: css.spacing.xs
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
		crisisTest: {
			marginLeft: 'auto'
		},
		crisisBody: {
			fontSize: '0.8em',
			...css.column('sm')
		},
		crisisDifficulty: {
			...css.row('sm')
		},
		crisisDifficultyLabel: {
			fontWeight: 'bold',
			color: css.palette.sandal
		},
		crisisDifficultyValue: {
			color: css.text.regularColor
		},
		crisisOutcomeValue: {
			color: css.text.regularColor
		}
	});

	function getIcon(capability: Capability): string {
		if (capability instanceof Action) {
			return 'capabilities/action.svg';
		} else if (capability instanceof Reaction) {
			return 'capabilities/reaction.svg';
		} else if (capability instanceof Constant) {
			return 'capabilities/constant.svg';
		} else if (capability instanceof Secret) {
			return 'capabilities/secret.svg';
		} else if (capability instanceof Crisis) {
			return 'capabilities/crisis.svg';
		}
		throw new Error(`Unknown capability type: ${capability.constructor.name}`);
	}

	function getTitle(capability: Capability): string {
		if (capability instanceof BaseAction) {
			return capability.title;
		} else if (capability instanceof Reaction) {
			return capability.trigger.title;
		} else if (capability instanceof Constant) {
			return 'Constant';
		} else if (capability instanceof Crisis) {
			return 'Crisis';
		}
		throw new Error(`Unknown capability type: ${capability.constructor.name}`);
	}

	function getSubtitle(capability: Capability): string | undefined {
		if (capability instanceof Action) {
			return 'Acció';
		} else if (capability instanceof Secret) {
			return 'Secret';
		}
		return undefined;
	}
</script>

<script lang="ts">
	import { standardAttributes, type StandardAttributeProps } from './utils';
	import EffectsText from './EffectsText.svelte';
	import InlineSvg from './InlineSvg.svelte';
	import CostDisplay from './CostDisplay.svelte';
	import { cx } from '@emotion/css';

	interface Props extends StandardAttributeProps {
		capability: Capability;
	}

	const { capability, ...attributes }: Props = $props();
	const styles = $derived(stylesFor(capability instanceof BaseAction ? 'actionLike' : 'regular'));
</script>

<div {...standardAttributes(attributes, styles.capabilityDisplay)}>
	<div class={styles.entry}>
		<InlineSvg class={styles.icon} src={getIcon(capability)} />
		<div class={styles.details}>
			{#if capability instanceof Crisis}
				<div class={styles.header}>
					<div class={styles.title}>Crisis</div>
					<EffectsText class={styles.crisisTest} effects={capability.test} />
				</div>
				<div class={styles.crisisBody}>
					<div class={styles.crisisDifficulty}>
						<div class={styles.crisisDifficultyLabel}>Dificultat:</div>
						<EffectsText class={styles.crisisDifficultyValue} effects={capability.difficulty} />
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
				{@const title = getTitle(capability)}
				{@const subtitle = getSubtitle(capability)}
				<div class={styles.header}>
					<div class={styles.heading}>
						<div class={styles.title}>
							{title}
						</div>
						{#if subtitle}
							<span class={styles.subtitle}>
								{subtitle}
							</span>
						{/if}
					</div>
					{#if capability instanceof ConcreteCapability}
						<CostDisplay class={styles.cost} cost={capability.cost} />
					{/if}
				</div>
				<div class={styles.body}>
					<EffectsText effects={capability.effects} />
				</div>
			{/if}
		</div>
	</div>
</div>
