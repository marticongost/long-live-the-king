import type { GoalData } from '$lib/models/cards';

export default {
	title: 'Altruïsta',
	capabilities: [
		{
			title: 'Objectiu',
			type: 'reaction',
			trigger: 'gameEnd',
			effects: 'Si el {food} del teu regne és 4 o més, guanya {prestige 3}.'
		}
	]
} satisfies GoalData;
