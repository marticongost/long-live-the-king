import type { CrisisData } from '$lib/models/cards';

export default {
	title: 'Conspiració estrangera',
	properties: ['adversity'],
	test: '{intrigue}',
	difficulty: '{kingdom-members} × {danger}',
	highestContributionReward: '{prestige 1}',
	penalty:
		'El regne pateix {stability -1} i {might -1}. Els jugadors que menys hagin contribuit perden {power 2}.'
} satisfies CrisisData;
