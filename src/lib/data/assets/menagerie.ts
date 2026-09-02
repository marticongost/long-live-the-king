import type { AssetData } from '$lib/models/cards';

export default {
	title: 'Col·lecció de feres',
	properties: ['land', 'luxury'],
	discardBonus: { gold: 3 },
	capabilities: [
		{
			type: 'reaction',
			trigger: 'gameEnd',
			effects: 'Guanyar {prestige 1}.'
		}
	]
} satisfies AssetData;
