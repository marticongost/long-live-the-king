<script lang="typescript">
	import MarkdownRules from '$lib/components/MarkdownRules.svelte';
	import rules from './rules.md?raw';
</script>

<MarkdownRules markdown={rules} />
