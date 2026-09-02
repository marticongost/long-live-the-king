import type { EventData } from '$lib/models/cards';

export default {
	title: 'Immigració',
	capabilities: [
		{
			type: 'crisis',
			test: '{power} + {gold}',
			difficulty: '2 + {players} al regne',
			penalty:
				'El regne pateix {happiness -1}. Els {players} del regne que menys hagin contribuit perden {power 2}.',
			highestContributionReward: `{prestige 1}, {power 2}`
		}
	]
} satisfies EventData;
