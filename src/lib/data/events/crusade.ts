import type { EventData } from '$lib/models/cards';

export default {
	title: 'Croada',
	properties: ['adversity'],
	capabilities: [
		{
			type: 'crisis',
			test: '{faith} + {strength}',
			difficulty: '{players} al regne x 2',
			highestContributionReward: '{prestige 1}, {power 2}',
			penalty:
				'El regne pateix {grace -1} i {might -1}. Els jugadors que menys hagin contribuit perden {power 2} i {faith 2}.'
		}
	]
} satisfies EventData;
