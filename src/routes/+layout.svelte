<script lang="ts">
	import favicon from '$lib/assets/favicon.svg?url';
	import { globalStyles } from '$lib/styles';
	import { injectGlobal } from '@emotion/css';

	injectGlobal(globalStyles);

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
