import type { EventData } from '$lib/models/cards';

export default {
	title: 'Mala collita',
	properties: ['adversity'],
	capabilities: [
		{
			type: 'crisis',
			test: '{gold}',
			difficulty: '{players} al regne x 2',
			highestContributionReward: '{prestige 1}',
			penalty: 'El regne pateix {stability -2}.'
		}
	]
} satisfies EventData;
