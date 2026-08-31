import type { AssetData } from '$lib/models/cards';

export default {
	title: 'Capità de la guàrdia',
	properties: ['retinue'],
	discardBonus: { strength: 2 },
	capabilities: [
		{
			title: 'Puny de ferro',
			type: 'action',
			cost: { power: 1 },
			effects: 'Guanyar {strength 2}.'
		}
	]
} satisfies AssetData;
