<script lang="typescript" module>
	import * as css from '$lib/styles';
	const styles = css.styles({
		rules: {
			margin: 'auto',
			padding: css.spacing.xl,
			backgroundColor: css.palette.linen,
			width: '46em',
			boxShadow: `inset 0 0 2em 0.5em ${css.palette.gurkha}a0, 0 0 0.5em rgba(0,0,0,0.15)`,
			border: `1px solid ${css.palette.gurkha}`
		},
		content: {
			textAlign: 'justify'
		}
	});
</script>

<script lang="typescript">
	import Markdown from '$lib/components/Markdown.svelte';
	import Example from '$lib/components/Example.svelte';
	import rules from './rules.md?raw';
</script>

<div class={styles.rules}>
	<Markdown class={styles.content} markdown={rules}>
		{#snippet example(markdown = '')}
			<Example {markdown} />
		{/snippet}
	</Markdown>
</div>
