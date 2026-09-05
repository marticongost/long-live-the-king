<script lang="ts" module>
	import * as css from '$lib/styles';

	const styles = css.styles({
		sidebar: {
			...css.column('md'),
			flex: '0 0 13em'
		},
		search: {
			width: '100%',
			height: css.forms.controlHeight,
			...css.hpadding('sm'),
			border: css.forms.controlBorder,
			backgroundColor: css.forms.controlBackgroundColor,
			color: css.text.regularColor,
			fontFamily: css.fonts.text,
			fontSize: '1em',
			...css.focus.mixin
		},
		filterHeading: {
			margin: 0,
			marginBottom: css.spacing.sm,
			fontSize: '1em',
			fontWeight: 900,
			color: css.palette.sandal
		},
		filters: {
			listStyleType: 'none',
			margin: 0,
			padding: 0,
			borderBottom: css.separators.regularBorder
		},
		rootFilter: {
			borderTop: css.separators.regularBorder
		},
		nestedFilter: {
			borderTop: css.separators.thinBorder
		},
		filterLabel: {
			...css.row('sm'),
			fontSize: '0.9em',
			width: '100%',
			...css.vpadding('sm'),
			cursor: 'pointer',
			color: css.palette.wood,
			'&:has(input:focus-visible)': {
				outline: css.focus.outline
			}
		},
		radio: {
			position: 'absolute',
			width: '1px',
			height: '1px',
			margin: '-1px',
			padding: 0,
			overflow: 'hidden',
			clip: 'rect(0 0 0 0)',
			clipPath: 'inset(50%)',
			whiteSpace: 'nowrap',
			border: 0
		},
		checkbox: {
			margin: 0,
			accentColor: css.palette.sandal
		},
		count: {
			marginLeft: 'auto',
			color: css.text.mutedColor,
			fontFamily: css.fonts.number,
			fontSize: '0.9em'
		},
		selectedTitle: {
			fontWeight: 700
		},
		dimmed: {
			opacity: 0.4
		}
	});
</script>

<script lang="ts">
	import { cx } from '@emotion/css';
	import { standardAttributes, type StandardAttributeProps } from './utils';
	import { filterEntries, filterableProperties } from '$lib/search';
	import type { PropertyId } from '$lib/models/properties';
	import Button from './Button.svelte';

	interface Props extends StandardAttributeProps {
		search?: string;
		selectedFilter?: string;
		selectedProperties?: Array<PropertyId>;
		counts: Map<string, number>;
		propertyCounts: Map<PropertyId, number>;
	}

	let {
		search = $bindable(''),
		selectedFilter = $bindable('all'),
		selectedProperties = $bindable([]),
		counts,
		propertyCounts,
		...attributes
	}: Props = $props();

	function clearFilters() {
		search = '';
		selectedFilter = 'all';
		selectedProperties = [];
	}
</script>

<aside {...standardAttributes(attributes, styles.sidebar)}>
	<input
		class={styles.search}
		type="search"
		placeholder="Cerca..."
		aria-label="Cerca cartes"
		bind:value={search}
	/>

	<section>
		<h1 class={styles.filterHeading}>Tipus de carta</h1>

		<ul class={styles.filters}>
			{#each filterEntries as entry (entry.id)}
				{#if entry.kind === 'group'}
					{#each entry.options as option, index (option.id)}
						<li
							class={cx(index === 0 ? styles.rootFilter : styles.nestedFilter, {
								[styles.dimmed]: (counts.get(option.id) ?? 0) === 0
							})}
						>
							<label class={styles.filterLabel}>
								<input
									class={styles.radio}
									type="radio"
									name="card-type-filter"
									value={option.id}
									bind:group={selectedFilter}
								/>
								<span class={selectedFilter === option.id ? styles.selectedTitle : undefined}
									>{option.title}</span
								>
								<span class={styles.count}>{counts.get(option.id) ?? 0}</span>
							</label>
						</li>
					{/each}
				{:else}
					<li
						class={cx(styles.rootFilter, {
							[styles.dimmed]: (counts.get(entry.id) ?? 0) === 0
						})}
					>
						<label class={styles.filterLabel}>
							<input
								class={styles.radio}
								type="radio"
								name="card-type-filter"
								value={entry.id}
								bind:group={selectedFilter}
							/>
							<span class={selectedFilter === entry.id ? styles.selectedTitle : undefined}
								>{entry.title}</span
							>
							<span class={styles.count}>{counts.get(entry.id) ?? 0}</span>
						</label>
					</li>
				{/if}
			{/each}
		</ul>
	</section>

	<section>
		<h1 class={styles.filterHeading}>Propietats</h1>

		<ul class={styles.filters}>
			{#each filterableProperties as property (property.id)}
				<li
					class={cx(styles.nestedFilter, {
						[styles.dimmed]: (propertyCounts.get(property.id) ?? 0) === 0
					})}
				>
					<label class={styles.filterLabel}>
						<input
							class={styles.checkbox}
							type="checkbox"
							value={property.id}
							bind:group={selectedProperties}
						/>
						<span
							class={selectedProperties.includes(property.id) ? styles.selectedTitle : undefined}
							>{property.title}</span
						>
						<span class={styles.count}>{propertyCounts.get(property.id) ?? 0}</span>
					</label>
				</li>
			{/each}
		</ul>
	</section>

	<Button onclick={clearFilters}>Neteja els filtres</Button>
</aside>
