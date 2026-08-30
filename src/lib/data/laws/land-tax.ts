import type { GoalData } from '$lib/models/cards';

export default {
	title: "Llei d'impost a la propietat",
	discardBonus: { intrigue: 1 },
	capabilities: [
		{
			title: 'Efecte',
			type: 'reaction',
			trigger: 'turnStart',
			effects:
				'Si està en vigor, cada {players} del regne que tingui {land} {visible} que generin un total de 2+ {gold} per torn ha de pagar {gold 1} al Tresorer.'
		}
	]
} satisfies GoalData;
