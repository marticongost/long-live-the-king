<script lang="ts" module>
	import {
		Action,
		ConcreteCapability,
		Constant,
		Reaction,
		Secret,
		SingleChoice,
		type Capability
	} from '$lib/models/capabilities';
	import * as css from '$lib/styles';

	const styles = css.styles({
		capabilityDisplay: {
			lineHeight: '1em'
		},
		concreteCapability: {
			...css.row('sm'),
			alignItems: 'flex-start',
			padding: css.spacing.sm
		},
		choice: {
			position: 'relative'
		},
		connector: {
			position: 'absolute',
			left: '0.9em',
			top: '1.8em',
			bottom: '-0.2em',
			width: 0,
			'--connector-color': css.palette.ash,
			borderLeft: '2px solid var(--connector-color)'
		},
		rhombus: {
			position: 'absolute',
			left: '-0.06em',
			top: '50%',
			width: '1.1em',
			height: '1.1em',
			transform: 'translate(-50%, -50%) rotate(45deg)',
			backgroundColor: 'var(--connector-color)',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center'
		},
		rhombusText: {
			transform: 'rotate(-45deg)',
			fontFamily: css.fonts.heading,
			fontSize: '0.7em',
			fontWeight: 900,
			lineHeight: 1,
			color: css.palette.white
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
			marginBottom: css.spacing.xs
		},
		title: {
			fontSize: '0.9em',
			fontWeight: 900,
			fontFamily: css.fonts.heading,
			margin: 0,
			marginRight: 'auto'
		},
		body: {
			fontSize: '0.8em'
		},
		trigger: {
			fontWeight: 'bold',
			color: css.palette.sandal
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
		}
		throw new Error(`Unknown capability type: ${capability.constructor.name}`);
	}
</script>

<script lang="ts">
	import { standardAttributes, type StandardAttributeProps } from './utils';
	import Self from './CapabilityDisplay.svelte';
	import EffectsText from './EffectsText.svelte';
	import InlineSvg from './InlineSvg.svelte';
	import CostDisplay from './CostDisplay.svelte';

	interface Props extends StandardAttributeProps {
		capability: Capability;
	}

	const { capability, ...attributes }: Props = $props();
</script>

<div {...standardAttributes(attributes, styles.capabilityDisplay)}>
	{#if capability instanceof SingleChoice}
		{#each capability.choices as choice, index (index)}
			<div class={styles.choice}>
				<Self capability={choice} />
				{#if index < capability.choices.length - 1}
					<div class={styles.connector}>
						<div class={styles.rhombus}>
							<span class={styles.rhombusText}>O</span>
						</div>
					</div>
				{/if}
			</div>
		{/each}
	{:else if capability instanceof ConcreteCapability}
		<div class={styles.concreteCapability}>
			<InlineSvg class={styles.icon} src={getIcon(capability)} />
			<div class={styles.details}>
				<div class={styles.header}>
					<div class={styles.title}>
						{capability.title}
					</div>
					<CostDisplay cost={capability.cost} />
				</div>
				<div class={styles.body}>
					{#if capability instanceof Reaction}
						<span class={styles.trigger}>{capability.trigger.title}:</span>
					{/if}
					<EffectsText effects={capability.effects} />
				</div>
			</div>
		</div>
	{/if}
</div>
