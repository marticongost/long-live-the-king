<script lang="typescript">
	import CardGrid from '$lib/components/CardGrid.svelte';
	import { cardsCatalog } from '$lib/data/catalog';
</script>

<CardGrid cards={cardsCatalog.all()} />
