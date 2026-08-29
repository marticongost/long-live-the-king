import type { GoalData } from '$lib/models/cards';

export default {
	title: 'Malestar entre les tropes',
	capabilities: [
		{
			title: 'Contribuir',
			type: 'action',
			effects: 'Afegir X {gold} sobre aquesta carta.'
		},
		{
			title: 'Resolució',
			type: 'reaction',
			trigger: 'turnEnd',
			effects:
				"Si la carta té menys {gold} que el nombre de membres al regne, el regne pateix {might -1} i {happiness -1}. En cas contrari, el jugador que hagi fet la major contribució guanya {prestige 1} (en cas d'empat ningú guanya {prestige})."
		}
	]
} satisfies GoalData;
