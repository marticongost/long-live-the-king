<script lang="ts" module>
	import * as css from '$lib/styles';

	const styles = css.styles({
		root: {
			color: css.text.regularColor
		},
		heading: {
			fontFamily: css.fonts.heading,
			color: css.text.headingColor,
			lineHeight: '1.1',
			margin: `${css.spacing.lg} 0 ${css.spacing.sm}`
		},
		paragraph: {
			margin: `${css.spacing.md} 0`
		},
		list: {
			margin: `${css.spacing.md} 0`,
			paddingLeft: css.spacing.lg
		},
		listItem: {
			margin: `${css.spacing.xs} 0`
		},
		blockquote: {
			borderLeft: `4px solid ${css.palette.sandal}`,
			margin: `${css.spacing.md} 0`,
			paddingLeft: css.spacing.md,
			color: css.text.subtleColor
		},
		code: {
			backgroundColor: css.palette.blush,
			border: `1px solid ${css.palette.thatch}`,
			borderRadius: '0.3em',
			padding: css.spacing.sm,
			margin: `${css.spacing.md} 0`,
			overflowX: 'auto'
		},
		inlineCode: {
			backgroundColor: css.palette.blush,
			border: `1px solid ${css.palette.thatch}`,
			borderRadius: '0.3em',
			padding: '0 0.25em',
			fontFamily: 'monospace'
		},
		link: {
			color: css.text.linkColor,
			':hover': {
				color: css.text.linkHoverColor
			}
		},
		hr: {
			border: 'none',
			borderTop: css.separators.regularBorder,
			margin: `${css.spacing.lg} 0`
		}
	});
</script>

<script lang="ts">
	import { lexer } from 'marked';
	import type { Token, Tokens } from 'marked';
	import { parse } from '$lib/models/effects';
	import EffectsChunks from './EffectsChunks.svelte';

	interface Props {
		markdown: string;
	}

	const { markdown }: Props = $props();
	const tokens = $derived(lexer(markdown));

	const headingTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;

	function headingTag(depth: number): (typeof headingTags)[number] {
		return headingTags[Math.min(Math.max(depth, 1), 6) - 1];
	}
</script>

<div class={styles.root}>
	{#snippet renderBlocks(blocks: Token[])}
		{#each blocks as token (token)}
			{#if token.type === 'heading'}
				<svelte:element this={headingTag(token.depth)} class={styles.heading}>
					{@render renderInline(token.tokens ?? [])}
				</svelte:element>
			{:else if token.type === 'paragraph'}
				<p class={styles.paragraph}>
					{@render renderInline(token.tokens ?? [])}
				</p>
			{:else if token.type === 'text'}
				{@render renderInline(
					token.tokens ?? [{ type: 'text', raw: token.text, text: token.text }]
				)}
			{:else if token.type === 'list'}
				{#if token.ordered}
					<ol class={styles.list} start={token.start === '' ? undefined : token.start}>
						{#each token.items as item (item)}
							{@render renderListItem(item)}
						{/each}
					</ol>
				{:else}
					<ul class={styles.list}>
						{#each token.items as item (item)}
							{@render renderListItem(item)}
						{/each}
					</ul>
				{/if}
			{:else if token.type === 'blockquote'}
				<blockquote class={styles.blockquote}>
					{@render renderBlocks(token.tokens ?? [])}
				</blockquote>
			{:else if token.type === 'code'}
				<pre class={styles.code}><code>{token.text}</code></pre>
			{:else if token.type === 'hr'}
				<hr class={styles.hr} />
			{/if}
		{/each}
	{/snippet}

	{#snippet renderListItem(item: Tokens.ListItem)}
		<li class={styles.listItem}>
			{@render renderBlocks(item.tokens)}
		</li>
	{/snippet}

	{#snippet renderInline(inlineTokens: Token[])}
		{#each inlineTokens as token (token)}
			{#if token.type === 'text'}
				<EffectsChunks chunks={parse(token.text)} />
			{:else if token.type === 'escape'}
				{token.text}
			{:else if token.type === 'strong'}
				<strong>
					{@render renderInline(token.tokens ?? [])}
				</strong>
			{:else if token.type === 'em'}
				<em>
					{@render renderInline(token.tokens ?? [])}
				</em>
			{:else if token.type === 'del'}
				<del>
					{@render renderInline(token.tokens ?? [])}
				</del>
			{:else if token.type === 'codespan'}
				<code class={styles.inlineCode}>{token.text}</code>
			{:else if token.type === 'link'}
				<a class={styles.link} href={token.href} title={token.title ?? undefined}>
					{@render renderInline(token.tokens ?? [])}
				</a>
			{:else if token.type === 'br'}
				<br />
			{/if}
		{/each}
	{/snippet}

	{@render renderBlocks(tokens)}
</div>
