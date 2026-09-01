import type { OfficeData } from '$lib/models/cards';

export default {
	title: 'Bufó',
	capabilities: [
		{
			type: 'reaction',
			trigger: 'turnStart',
			effects:
				'Guanya {power 1} o {intrigue 1}. Si ets el membre del regne amb < {prestige}, guanya {prestige 1}.'
		},
		{
			type: 'constant',
			effects:
				'No pots participar en lleis. Perds els teus altres {offices} i no en pots guanyar de nous.'
		},
		{
			title: 'Ridiculitzar',
			type: 'action',
			effects:
				'{duel} {power} + {intrigue} contra un altre membre del regne. El perdedor dona {prestige 1} al vencedor. Si el bufó guanya el duel, {happiness 1}. Si el guanya per 2+, roba una carta aleatòria al rival.'
		}
	]
} satisfies OfficeData;
