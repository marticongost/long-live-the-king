import type { GoalData } from '$lib/models/cards';

export default {
	title: 'Església',
	properties: ['land'],
	discardBonus: { gold: 1, power: 1 },
	capabilities: [
		{
			title: "L'ombra de la creu",
			type: 'action',
			effects: 'Guanyar {power 1} o {gold 1}. Límit un cop per torn.'
		},
		{
			title: 'Pregària',
			type: 'action',
			cost: { gold: 2 },
			effects:
				"Mira en secret les dues següents cartes d'esdeveniment. Torna una de les cartes a dalt de la pila, descarta l'altra."
		}
	]
} satisfies GoalData;
