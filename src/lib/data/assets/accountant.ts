import type { AssetData } from '$lib/models/cards';

export default {
	title: 'Comptable',
	properties: ['retinue'],
	discardBonus: { gold: 2 },
	capabilities: [
		{
			title: 'Comptabilitat creativa',
			type: 'action',
			cost: { power: 1 },
			effects: 'Guanyar {gold 2}.'
		}
	]
} satisfies AssetData;
