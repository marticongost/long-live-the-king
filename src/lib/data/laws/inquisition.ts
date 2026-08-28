import type { GoalData } from '$lib/models/cards';

export default {
	title: 'Llei anti-bruixeria',
	discardBonus: { intrigue: 1 },
	capabilities: [
		{
			title: 'Proposar la llei',
			type: 'action',
			effects: 'Iniciar una {vote}. Si té èxit, la llei entra en vigor. Si no, descartar la carta.'
		},
		{
			title: 'Efecte',
			type: 'reaction',
			trigger: 'turnEnd',
			effects:
				"Si està en vigor, cada jugador revela 2 cartes aleatòries. Si una d'elles té el tret Màgia, {execute} el propietari."
		}
	]
} satisfies GoalData;
