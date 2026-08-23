import type { OfficeData } from '$lib/models/cards';

export default {
	title: 'Bufó',
	capabilities: [
		{
			title: 'Doble cara',
			type: 'reaction',
			trigger: 'turnStart',
			effects:
				'Guanya {power 1} o {intrigue 1}. Si ets el membre del regne amb < {prestige}, guanya {prestige 1}.'
		},
		{
			title: 'Ase dels cops',
			type: 'constant',
			effects:
				'No pots participar en lleis. Perds els teus altres {offices} i no en pots guanyar de nous.'
		},
		{
			title: 'Picaresca',
			type: 'action',
			cost: { intrigue: 1 },
			effects: "Roba una carta aleatòria d'un altre membre del regne. {happiness 1}."
		},
		{
			title: 'Ridiculitzar',
			type: 'action',
			effects:
				'{duel} {power} + {intrigue}. El perdedor dona {prestige 1} al vencedor. Si guanyes el duel, {happiness 1}.'
		}
	]
} satisfies OfficeData;
