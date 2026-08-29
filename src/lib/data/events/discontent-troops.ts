import type { GoalData } from '$lib/models/cards';

export default {
	title: 'Malestar entre les tropes',
	capabilities: [
		{
			type: 'crisis',
			test: '{gold}',
			difficulty: '{players} al regne',
			highestContributionReward: '{prestige 1}',
			penalty: '{might -1}, {happiness -1}'
		}
	]
} satisfies GoalData;
