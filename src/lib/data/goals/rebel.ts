import type { GoalData } from '$lib/models/cards';

export default {
	title: 'Rebel',
	capabilities: [
		{
			title: 'Objectiu',
			type: 'reaction',
			trigger: 'gameEnd',
			effects: 'Si el rei del teu regne inicial ha estat deposat, guanya {prestige 3}.'
		}
	]
} satisfies GoalData;
