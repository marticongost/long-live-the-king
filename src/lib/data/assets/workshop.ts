import type { AssetData } from '$lib/models/cards';

export default {
	title: 'Taller',
	properties: ['land'],
	discardBonus: { gold: 2 },
	capabilities: [
		{
			title: 'Beneficis',
			type: 'action',
			effects: 'Guanyar {gold 1}. Límit un cop per torn.'
		},
		{
			title: 'Producció',
			type: 'action',
			cost: { gold: 2 },
			effects: 'El teu regne guanya {wealth 1}.'
		}
	]
} satisfies AssetData;
