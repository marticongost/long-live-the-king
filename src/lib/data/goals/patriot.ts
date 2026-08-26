import type { GoalData } from '$lib/models/cards';

export default {
	title: 'Patriota',
	capabilities: [
		{
			title: 'Objectiu',
			type: 'reaction',
			trigger: 'gameEnd',
			effects: 'Si la {supremacy} del teu regne és 4 o més, guanya {prestige 3}.'
		}
	]
} satisfies GoalData;
