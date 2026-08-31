import type { AssetData } from '$lib/models/cards';

export default {
	title: 'Cortesana',
	properties: ['retinue'],
	discardBonus: { intrigue: 2 },
	capabilities: [
		{
			title: 'Seducció',
			type: 'action',
			cost: { power: 1 },
			effects: 'Guanyar {intrigue 2}.'
		}
	]
} satisfies AssetData;
