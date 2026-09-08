import type { AssetData } from '$lib/models/cards';

export default {
	title: 'Cronista',
	properties: ['retinue'],
	capabilities: [
		{
			type: 'reaction',
			trigger: 'afterWinningDuel',
			effects: 'Guanyar {prestige 1}. Màxim un cop per torn.'
		}
	]
} satisfies AssetData;
