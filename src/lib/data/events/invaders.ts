import type { EventData } from '$lib/models/cards';

export default {
	title: 'Invasió',
	properties: ['adversity'],
	capabilities: [
		{
			type: 'crisis',
			test: '{might} + {strength}',
			difficulty: '{kingdom-members} × {danger} + {wealth}',
			penalty: 'El regne pateix {stability -1}. Cada membre del regne perd un {asset} aleatòri.',
			highestContributionReward: `{prestige 1}`
		}
	]
} satisfies EventData;
