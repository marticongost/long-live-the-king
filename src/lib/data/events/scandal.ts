import type { EventData } from '$lib/models/cards';

export default {
	title: 'Escàndol',
	capabilities: [
		{
			type: 'crisis',
			test: '{intrigue}',
			difficulty: '{kingdom-members} × {danger}',
			highestContributionReward: '{prestige 1}',
			penalty:
				'El regne pateix {stability -2}. El jugador amb més {prestige} del regne perd {prestige 1}.'
		}
	]
} satisfies EventData;
