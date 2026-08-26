import type { GoalData } from '$lib/models/cards';

export default {
	title: 'Distingit',
	capabilities: [
		{
			title: 'Objectiu',
			type: 'reaction',
			trigger: 'gameEnd',
			effects:
				'Si acabes la partida sent el jugador amb més {offices}, guanya {prestige 1} per cada 3 jugadors presents a la partida (arrodonint avall).'
		}
	]
} satisfies GoalData;
