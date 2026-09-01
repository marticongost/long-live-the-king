import type { EventData } from '$lib/models/cards';

export default {
	title: 'Plaga',
	capabilities: [
		{
			type: 'reaction',
			trigger: 'turnEnd',
			effects:
				"El regne pateix {supremacy -1} i {happiness -1}. Llançar 1d6 per cada jugador al regne. Amb un resultat d'1 o 2, escollir una carta {retinue} aleatòria del jugador i descartar-la."
		}
	]
} satisfies EventData;
