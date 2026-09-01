import type { EventData } from '$lib/models/cards';

export default {
	title: 'Xantatge',
	capabilities: [
		{
			title: 'Pagar',
			type: 'secret',
			cost: { gold: 1 },
			effects: 'Et lliures del xantatge durant 1 torn.'
		},
		{
			title: 'Solució permanent',
			type: 'secret',
			cost: { intrigue: 2 },
			effects: 'Eliminar aquesta carta.'
		},
		{
			type: 'reaction',
			trigger: 'turnEnd',
			effects:
				"Si ets el membre del regne amb més {prestige} i no has pagat aquest torn, es revela el teu historial als {players} del regne i es descarta l'esdeveniment."
		}
	]
} satisfies EventData;
