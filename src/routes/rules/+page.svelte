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
	import Markdown from '$lib/components/Markdown.svelte';
	import rules from './rules.md?raw';
</script>

<Markdown class={styles.rules} markdown={rules} />
