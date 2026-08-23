<script lang="ts" module>
	import type { ResourceType } from '$lib/models/resources';
	import * as css from '$lib/styles';
	import InlineSvg from './InlineSvg.svelte';

	const styles = css.styles({
		resourceDisplay: {},
		icon: {},
		amount: {}
	});
</script>

<script lang="ts">
	import { standardAttributes, type StandardAttributeProps } from './utils';

	interface Props extends StandardAttributeProps {
		resource: ResourceType;
		amount?: number;
	}

	const { resource, amount = 0, ...attributes }: Props = $props();
</script>

<span {...standardAttributes(attributes, styles.resourceDisplay)}>
	<InlineSvg class={styles.icon} src="resources/{resource}.svg" />
	{#if amount}
		<span class={styles.amount}>
			{amount}
		</span>
	{/if}
</span>
