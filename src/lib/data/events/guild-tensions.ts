import type { EventData } from '$lib/models/cards';

export default {
	title: 'Tensions amb els gremis',
	properties: ['adversity'],
	capabilities: [
		{
			type: 'crisis',
			test: '{power}',
			difficulty: '{kingdom-members} × {danger}',
			highestContributionReward: '{prestige 1}',
			penalty:
				'El regne pateix {wealth -1}. Els jugadors que menys hagin contribuit perden {gold}={danger}.'
		}
	]
} satisfies EventData;
