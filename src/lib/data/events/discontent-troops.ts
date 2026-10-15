import type { EventData } from '$lib/models/cards';

export default {
	title: 'Malestar entre les tropes',
	properties: ['adversity'],
	capabilities: [
		{
			type: 'crisis',
			test: '{gold}',
			difficulty: '{kingdom-members} × {danger}',
			highestContributionReward: '{prestige 1}',
			penalty: '{might -1}, {stability -1}'
		}
	]
} satisfies EventData;
