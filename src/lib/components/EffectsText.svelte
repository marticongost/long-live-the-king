<script lang="ts" module>
	import { parse } from '$lib/models/effects';
	import { keywords } from '$lib/models/keywords';
	import * as css from '$lib/styles';
	import { cx } from '@emotion/css';
	import KingdomStatDisplay from './KingdomStatDisplay.svelte';
	import ResourceDisplay from './ResourceDisplay.svelte';

	const styles = css.styles({
		effectsText: {},
		invalid: {
			backgroundColor: css.text.negativeColor,
			color: css.palette.white
		},
		text: {
			color: css.text.regularColor
		},
		keyword: {
			color: css.text.highlightColor
		},
		keywordIcon: {},
		input: {
			display: 'inline-block',
			border: `2px solid ${css.palette.dawn}`,
			verticalAlign: 'middle',
			height: '1.5em',
			borderRadius: '0.3em',
			margin: 0
		},
		numericInput: {
			width: '2em'
		},
		checkInput: {
			width: '1em',
			borderRadius: '0.8em',
			height: '1em'
		},
		textInput: {
			width: '5em'
		}
	});
</script>

<script lang="ts">
	import InlineSvg from './InlineSvg.svelte';
	import { standardAttributes, type StandardAttributeProps } from './utils';

	interface Props extends StandardAttributeProps {
		effects: string;
	}

	const { effects, ...attributes }: Props = $props();
	const chunks = $derived(parse(effects));

	function exhaustiveCheck(value: never): never {
		throw new Error(`Missing branches (${value})`);
	}
</script>

<span {...standardAttributes(attributes, styles.effectsText)}>
	{#each chunks as chunk, index (index)}
		{#if chunk.type === 'invalid'}
			<code class={styles.invalid}>
				{chunk.message}
			</code>
		{:else if chunk.type === 'text'}
			<span class={styles.text}>{chunk.text}</span>
		{:else if chunk.type === 'keyword'}
			{@const label = keywords[chunk.keyword]}
			{#if label === undefined}
				<InlineSvg class={styles.keywordIcon} src="keywords/{chunk.keyword}.svg" />
			{:else}
				<strong class={styles.keyword}>{keywords[chunk.keyword]}</strong>
			{/if}
		{:else if chunk.type === 'resource'}
			<ResourceDisplay resource={chunk.resource} amount={chunk.amount} />
		{:else if chunk.type === 'kingdom-stat'}
			<KingdomStatDisplay stat={chunk.stat} amount={chunk.amount} />
		{:else if chunk.type === 'input'}
			<span
				class={cx(styles.input, {
					[styles.numericInput]: chunk.format === 'number',
					[styles.textInput]: chunk.format === 'text',
					[styles.checkInput]: chunk.format === 'check'
				})}
			></span>
		{:else}
			{exhaustiveCheck(chunk)}
		{/if}
	{/each}
</span>
