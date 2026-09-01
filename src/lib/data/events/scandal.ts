import type { EventData } from '$lib/models/cards';

export default {
	title: 'Escàndol',
	capabilities: [
		{
			type: 'reaction',
			trigger: 'turnEnd',
			effects:
				'El jugador amb més {prestige} del regne escull si pagar {power 3} o perdre {prestige 1}.'
		}
	]
} satisfies EventData;
