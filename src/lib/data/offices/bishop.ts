import type { OfficeData } from '$lib/models/cards';

export default {
	title: 'Bisbe',
	capabilities: [
		{
			type: 'reaction',
			trigger: 'turnStart',
			effects: 'Guanyar {faith 2}.'
		},
		{
			title: 'Sermó',
			type: 'conflict',
			cost: { faith: 3 },
			effects: 'El teu regne guanya {grace 1}.'
		},
		{
			title: 'Excomulgar',
			type: 'conflict',
			effects: '{duel} {any} contra un altre membre del regne. El perdedor és {exiled} del regne.'
		}
	]
} satisfies OfficeData;
