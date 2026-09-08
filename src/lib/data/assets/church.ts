import type { AssetData } from '$lib/models/cards';

export default {
	title: 'Església',
	properties: ['land'],
	capabilities: [
		{
			title: "L'ombra de la creu",
			type: 'action',
			effects: 'Guanyar {power 1} o {gold 1}.'
		},
		{
			title: 'Pregària',
			type: 'action',
			cost: { gold: 2 },
			effects:
				"Mira en secret les dues següents cartes d'esdeveniment. Torna una de les cartes a dalt de la pila, descarta l'altra."
		}
	]
} satisfies AssetData;
