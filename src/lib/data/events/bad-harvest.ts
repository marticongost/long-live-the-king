import type { EventData } from '$lib/models/cards';

export default {
	title: 'Mala collita',
	properties: ['adversity'],
	capabilities: [
		{
			type: 'crisis',
			test: '{gold}',
			difficulty: '{kingdom-members} × {danger}',
			highestContributionReward: '{prestige 1}',
			penalty: 'El regne pateix {stability -2}.'
		}
	]
} satisfies EventData;
