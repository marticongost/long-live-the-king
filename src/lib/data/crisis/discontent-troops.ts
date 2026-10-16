import type { CrisisData } from '$lib/models/cards';

export default {
	title: 'Malestar entre les tropes',
	properties: ['adversity'],
	test: '{gold}',
	difficulty: '{kingdom-members} × {danger}',
	highestContributionReward: '{prestige 1}',
	penalty: '{might -1}, {stability -1}'
} satisfies CrisisData;
