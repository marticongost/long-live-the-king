import type { EventData } from '$lib/models/cards';

export default {
	title: 'Cisme religiós',
	properties: ['adversity'],
	capabilities: [
		{
			type: 'crisis',
			test: '{faith}',
			difficulty: '{kingdom-members} × {danger}',
			highestContributionReward: '{prestige 1}, {power 2}',
			penalty:
				'El regne pateix {grace -2} i {stability -1}. Els jugadors que menys hagin contribuit perden {any}={danger}.'
		}
	]
} satisfies EventData;
