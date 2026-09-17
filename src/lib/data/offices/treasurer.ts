import type { OfficeData } from '$lib/models/cards';

export default {
	title: 'Tresorer',
	capabilities: [
		{
			type: 'reaction',
			trigger: 'turnStart',
			effects: 'Guanyar {gold 2}.'
		},
		{
			title: 'Augmentar els ingressos',
			type: 'conflict',
			cost: { gold: 3 },
			effects: 'El teu regne guanya {wealth 1}.'
		},
		{
			title: 'Fixar impostos',
			type: 'conflict',
			cost: { power: 1 },
			effects:
				'Moure {taxes} 1 o 2 espais en qualsevol direcció. Canviar {stability} en la mateixa quantitat, en la direcció oposada.'
		}
	]
} satisfies OfficeData;
