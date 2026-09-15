import type { EventData } from '$lib/models/cards';

export default {
	title: 'Plaga',
	properties: ['adversity'],
	capabilities: [
		{
			type: 'reaction',
			trigger: 'turnEnd',
			effects:
				"El regne pateix {stability -2}. Llançar 1d6 per cada jugador al regne. Amb un resultat d'1 o 2, escollir una carta {retinue} aleatòria del jugador i descartar-la."
		}
	]
} satisfies EventData;
