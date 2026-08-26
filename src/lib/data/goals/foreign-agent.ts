import type { GoalData } from '$lib/models/cards';

export default {
	title: 'Agent estranger',
	capabilities: [
		{
			title: 'Objectiu',
			type: 'reaction',
			trigger: 'gameEnd',
			effects:
				"Si un altre regne (escollit a l'inici de la partida) acaba la partida amb més {supremacy} que el teu regne, guanya {prestige 3}."
		}
	]
} satisfies GoalData;
