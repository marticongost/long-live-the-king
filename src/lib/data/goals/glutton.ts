import type { GoalData } from '$lib/models/cards';

export default {
	title: 'Golut',
	goalType: 'collective',
	capabilities: [
		{
			type: 'reaction',
			trigger: 'gameEnd',
			effects: 'Si el {food} del teu regne és 2 o menys, guanya {prestige 3}.'
		}
	]
} satisfies GoalData;
