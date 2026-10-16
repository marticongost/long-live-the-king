import type { CrisisData } from '$lib/models/cards';

export default {
	title: 'Guerra',
	properties: ['adversity'],
	test: '{might} + {strength}',
	difficulty: '{kingdom-members} × ({danger} + 1)',
	highestContributionReward: '{prestige 1}, robar carta ({land})',
	penalty:
		'El regne pateix {stability -2} i {wealth -2}. Els jugadors que menys hagin contribuit perden {prestige 1}.'
} satisfies CrisisData;
