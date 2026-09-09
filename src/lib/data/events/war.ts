import type { EventData } from '$lib/models/cards';

export default {
	title: 'Guerra',
	capabilities: [
		{
			type: 'crisis',
			test: '{might} + {strength}',
			difficulty: '{players} al regne x 3',
			highestContributionReward: '{prestige 1}, robar carta ({land})',
			penalty:
				'El regne pateix {supremacy -2} i {wealth -2}. Els jugadors que menys hagin contribuit perden {prestige 1}.'
		}
	]
} satisfies EventData;
