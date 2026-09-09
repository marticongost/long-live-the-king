import type { EventData } from '$lib/models/cards';

export default {
	title: 'Tensions amb els gremis',
	capabilities: [
		{
			type: 'crisis',
			test: '{power}',
			difficulty: '{players} al regne',
			highestContributionReward: '{prestige 1}',
			penalty:
				'El regne pateix {wealth -1}. Els jugadors que menys hagin contribuit perden {gold 2}.'
		}
	]
} satisfies EventData;
