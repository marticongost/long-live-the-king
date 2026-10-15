import type { EventData } from '$lib/models/cards';

export default {
	title: 'Bandolers',
	properties: ['adversity'],
	capabilities: [
		{
			type: 'crisis',
			test: '{strength}',
			difficulty: '{kingdom-members} × {danger}',
			penalty:
				'El regne pateix {wealth -1}. Els {kingdom-members} que menys hagin contribuit perden {gold 2}.',
			highestContributionReward: `{prestige 1}, {power 2}`
		}
	]
} satisfies EventData;
