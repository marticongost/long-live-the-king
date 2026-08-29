import type { OfficeData } from '$lib/models/cards';

export default {
	title: 'Bisbe',
	capabilities: [
		{
			title: "Cap de l'església",
			type: 'reaction',
			trigger: 'turnStart',
			effects: 'Guanyar {power 1} / {intrigue 1} / {strength 1} / {gold 1} (a la teva el·lecció).'
		},
		{
			title: 'Sermó',
			type: 'action',
			cost: { power: 1 },
			effects: '{happiness 1} o {happiness -1}.'
		},
		{
			title: 'Excomulgar',
			type: 'action',
			effects:
				'{duel} {power} + {intrigue} contra un altre membre del regne. El perdedor és {exiled} del regne.'
		}
	]
} satisfies OfficeData;
