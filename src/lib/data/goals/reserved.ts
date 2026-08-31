import type { GoalData } from '$lib/models/cards';

export default {
	title: 'Reservat',
	goalType: 'personal',
	capabilities: [
		{
			title: 'Objectiu',
			type: 'reaction',
			trigger: 'gameEnd',
			effects:
				'Si acabes la partida controlant 3 o més cartes {asset} no {visible}, guanya {prestige 3}.'
		}
	]
} satisfies GoalData;
