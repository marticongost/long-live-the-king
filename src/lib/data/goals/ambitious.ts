import type { GoalData } from '$lib/models/cards';

export default {
	title: 'Ambiciós',
	capabilities: [
		{
			title: 'Objectiu',
			type: 'reaction',
			trigger: 'gameEnd',
			effects: 'Si acabes la partida amb 5 o més {power} a la mà, guanya {prestige 3}.'
		}
	]
} satisfies GoalData;
