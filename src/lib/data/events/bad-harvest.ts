import type { EventData } from '$lib/models/cards';

export default {
	title: 'Mala collita',
	capabilities: [
		{
			type: 'crisis',
			test: '{gold}',
			difficulty: '{players} al regne x 2',
			highestContributionReward: '{prestige 1}',
			penalty: 'El regne pateix {food -2} i {happiness -1}.'
		}
	]
} satisfies EventData;
