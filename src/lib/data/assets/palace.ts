import type { AssetData } from '$lib/models/cards';

export default {
	title: 'Palau',
	properties: ['land'],
	discardBonus: { gold: 2 },
	capabilities: [
		{
			title: 'Ostentació',
			type: 'action',
			effects: 'Guanyar {power 1}. Límit un cop per torn.'
		},
		{
			title: 'Banquet',
			type: 'action',
			cost: { gold: 3 },
			effects: 'El teu regne guanya {supremacy 1}.'
		}
	]
} satisfies AssetData;
