import type { GoalData } from '$lib/models/cards';

export default {
	title: 'Rebel',
	goalType: 'collective',
	capabilities: [
		{
			type: 'reaction',
			trigger: 'gameEnd',
			effects: 'Si el rei del teu regne inicial ha estat deposat, guanya {prestige 3}.'
		}
	]
} satisfies GoalData;
