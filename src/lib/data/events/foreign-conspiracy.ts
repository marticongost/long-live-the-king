import type { EventData } from '$lib/models/cards';

export default {
	title: 'Conspiració estrangera',
	capabilities: [
		{
			type: 'crisis',
			test: '{intrigue}',
			difficulty: '{players} al regne x 2',
			highestContributionReward: '{prestige 1}',
			penalty:
				'El regne pateix {supremacy -1} i {might -1}. Els jugadors que menys hagin contribuit perden {power 2}.'
		}
	]
} satisfies EventData;
