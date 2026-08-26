import type { GoalData } from '$lib/models/cards';

export default {
	title: 'Poderós',
	capabilities: [
		{
			title: 'Objectiu',
			type: 'reaction',
			trigger: 'gameEnd',
			effects:
				'Si ets el jugador amb més {might} a la bossa, guanya {prestige 1} per cada 3 jugadors presents a la partida (arrodonint avall).'
		}
	]
} satisfies GoalData;
