<script lang="ts" module>
	/* eslint-disable svelte/no-navigation-without-resolve */
	import * as css from '$lib/styles';

	const styles = css.styles({
		header: {
			...css.row('md'),
			borderBottom: `2px solid ${css.palette.sandal}`,
			color: css.palette.sandal
		},
		main: {
			padding: css.spacing.md
		}
	});
</script>

<script lang="ts">
	import favicon from '$lib/assets/favicon.svg?url';
	import Navigation from '$lib/components/Navigation.svelte';
	import { entries } from '$lib/navigation';
	import { globalStyles } from '$lib/styles';
	import { injectGlobal } from '@emotion/css';

	injectGlobal(globalStyles);

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header class={styles.header}>
	<Navigation {entries} />
</header>

<main class={styles.main}>
	{@render children()}
</main>
