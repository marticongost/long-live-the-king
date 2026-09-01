import type { EventData } from '$lib/models/cards';

export default {
	title: 'Invasió',
	capabilities: [
		{
			type: 'crisis',
			test: '{might} + {strength}',
			difficulty: '5 + {players} al regne',
			penalty: 'El regne pateix {supremacy -1}. Cada membre del regne perd una {asset} aleatòria.',
			highestContributionReward: `{prestige 1}`
		}
	]
} satisfies EventData;
