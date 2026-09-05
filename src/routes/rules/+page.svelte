<script lang="typescript" module>
	import * as css from '$lib/styles';
	const styles = css.styles({
		rules: {
			width: '40em',
			textAlign: 'justify',
			margin: 'auto'
		}
	});
</script>

<script lang="typescript">
	import MarkdownRules from '$lib/components/MarkdownRules.svelte';
	import rules from './rules.md?raw';
</script>

<MarkdownRules class={styles.rules} markdown={rules} />
