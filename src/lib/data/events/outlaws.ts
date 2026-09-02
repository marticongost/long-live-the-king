import type { EventData } from '$lib/models/cards';

export default {
	title: 'Bandolers',
	capabilities: [
		{
			type: 'crisis',
			test: '{strength}',
			difficulty: '2 + {players} al regne',
			penalty:
				'El regne pateix {wealth -1}. Els {players} del regne que menys hagin contribuit perden {gold 2}.',
			highestContributionReward: `{prestige 1}, {power 2}`
		}
	]
} satisfies EventData;
