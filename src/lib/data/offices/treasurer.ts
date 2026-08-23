import type { OfficeData } from '$lib/models/cards';

export default {
	title: 'Tresorer',
	capabilities: [
		{
			title: 'Banquer del regne',
			type: 'reaction',
			trigger: 'turnStart',
			effects: 'Guanyar {wealth} + {taxes} en {gold}.'
		},
		{
			title: 'Fixar impostos',
			type: 'action',
			cost: { power: 1 },
			effects:
				'Moure {taxes} 1 o 2 espais en qualsevol direcció. Canviar {happiness} en la mateixa quantitat, en la direcció oposada.'
		}
	]
} satisfies OfficeData;
