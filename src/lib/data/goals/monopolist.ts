import type { GoalData } from '$lib/models/cards';

export default {
	title: 'Monopolista',
	capabilities: [
		{
			title: 'Objectiu',
			type: 'reaction',
			trigger: 'gameEnd',
			effects: 'Si la {wealth} del teu regne és 2 o menys, guanya {prestige 3}.'
		}
	]
} satisfies GoalData;
