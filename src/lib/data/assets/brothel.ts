import type { AssetData } from '$lib/models/cards';

export default {
	title: 'Burdell',
	properties: ['land', 'illicit'],
	discardBonus: { gold: 2 },
	capabilities: [
		{
			title: 'Guanys',
			type: 'action',
			effects: 'Guanyar {gold 1} o {intrigue 1}.'
		},
		{
			title: 'Confidències',
			type: 'action',
			cost: { intrigue: 1 },
			effects: 'Guanya una carta.'
		}
	]
} satisfies AssetData;
