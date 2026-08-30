import type { AssetData } from '$lib/models/cards';

export default {
	title: 'Cronista',
	properties: ['retinue'],
	discardBonus: { gold: 1, power: 1 },
	capabilities: [
		{
			title: 'Cançó èpica',
			type: 'action',
			cost: { gold: 2, power: 2 },
			effects: 'Guanyar {prestige 1}.'
		}
	]
} satisfies AssetData;
