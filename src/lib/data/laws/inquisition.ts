import type { GoalData } from '$lib/models/cards';

export default {
	title: 'Llei anti-bruixeria',
	discardBonus: { intrigue: 1 },
	capabilities: [
		{
			title: 'Efecte',
			type: 'reaction',
			trigger: 'turnEnd',
			effects:
				"Si està en vigor, cada jugador revela 2 cartes aleatòries. Si una d'elles té el tret {magic}, {execute} el propietari."
		}
	]
} satisfies GoalData;
