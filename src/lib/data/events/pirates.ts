import type { EventData } from '$lib/models/cards';

export default {
	title: 'Pirates',
	capabilities: [
		{
			type: 'crisis',
			test: '{strength}',
			difficulty: '{players} al regne x 2',
			highestContributionReward: '{prestige 1}, {power 2}',
			penalty:
				'El regne pateix {supremacy -1} i {wealth -1}. Els jugadors que menys hagin contribuit perden {gold 3}.'
		}
	]
} satisfies EventData;
