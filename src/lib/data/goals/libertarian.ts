import type { GoalData } from '$lib/models/cards';

export default {
	title: 'Llibertari',
	capabilities: [
		{
			title: 'Objectiu',
			type: 'reaction',
			trigger: 'gameEnd',
			effects: 'Si els {taxes} del teu regne són 2 o menys, guanya {prestige 3}.'
		}
	]
} satisfies GoalData;
