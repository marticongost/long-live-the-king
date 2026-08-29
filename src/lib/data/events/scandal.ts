import type { GoalData } from '$lib/models/cards';

export default {
	title: 'Escàndol',
	capabilities: [
		{
			title: 'Resolució',
			type: 'reaction',
			trigger: 'turnEnd',
			effects:
				'El jugador amb més {prestige} del regne escull si pagar {power 3} o perdre {prestige 1}.'
		}
	]
} satisfies GoalData;
