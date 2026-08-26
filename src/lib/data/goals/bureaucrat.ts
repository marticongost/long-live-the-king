import type { GoalData } from '$lib/models/cards';

export default {
	title: 'Buròcrata',
	capabilities: [
		{
			title: 'Objectiu',
			type: 'reaction',
			trigger: 'gameEnd',
			effects: 'Si els {taxes} del teu regne són 4 o més, guanya {prestige 3}.'
		}
	]
} satisfies GoalData;
