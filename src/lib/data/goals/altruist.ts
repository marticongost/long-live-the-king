import type { GoalData } from '$lib/models/cards';

export default {
	title: 'Altruïsta',
	goalType: 'collective',
	capabilities: [
		{
			type: 'reaction',
			trigger: 'gameEnd',
			effects: 'Si el {food} del teu regne és 4 o més, guanya {prestige 3}.'
		}
	]
} satisfies GoalData;
