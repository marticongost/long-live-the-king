import type { EventData } from '$lib/models/cards';

export default {
	title: 'Escàndol',
	capabilities: [
		{
			type: 'crisis',
			test: '{intrigue}',
			difficulty: '{players} al regne',
			highestContributionReward: '{prestige 1}',
			penalty:
				'El regne pateix {supremacy -2}. El jugador amb més {prestige} del regne perd {prestige 1}.'
		}
	]
} satisfies EventData;
