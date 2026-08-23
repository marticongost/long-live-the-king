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
			padding: css.spacing.sm,
			'& + *': {
				borderTop: `1px dotted ${css.palette.lightPink}`
			}
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
			color: css.text.subtleColor
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
			<Self capability={choice} />
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
