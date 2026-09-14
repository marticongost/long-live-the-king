import type { EventData } from '$lib/models/cards';

export default {
	title: 'Invasió',
	capabilities: [
		{
			type: 'crisis',
			test: '{might} + {strength}',
			difficulty: '5 + {players} al regne',
			penalty: 'El regne pateix {stability -1}. Cada membre del regne perd un {asset} aleatòri.',
			highestContributionReward: `{prestige 1}`
		}
	]
} satisfies EventData;
