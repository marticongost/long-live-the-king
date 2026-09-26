import type { AssetData } from '$lib/models/cards';

export default {
	title: 'Església',
	properties: ['object', 'holy'],
	capabilities: [
		{
			title: 'Fervor',
			type: 'action',
			effects: 'Guanyar {faith 1}.'
		},
		{
			title: 'Pregària',
			type: 'action',
			cost: { faith: 2 },
			effects:
				"Mira en secret les dues següents cartes d'esdeveniment. Torna una de les cartes a dalt de la pila, descarta l'altra."
		}
	]
} satisfies AssetData;
