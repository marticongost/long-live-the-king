import type { CrisisData } from '$lib/models/cards';

export default {
	title: 'Cisme religiós',
	properties: ['adversity'],
	test: '{faith}',
	difficulty: '{kingdom-members} × {danger}',
	highestContributionReward: '{prestige 1}, {power 2}',
	penalty:
		'El regne pateix {grace -2} i {stability -1}. Els jugadors que menys hagin contribuit perden {any}={danger}.'
} satisfies CrisisData;
