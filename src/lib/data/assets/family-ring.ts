import type { AssetData } from '$lib/models/cards';

export default {
	title: 'Anell familiar',
	properties: ['object', 'luxury'],
	discardBonus: { gold: 2 },
	capabilities: [
		{
			type: 'reaction',
			trigger: 'playerDiscards',
			effects: 'Guanyar {power 1}.'
		}
	]
} satisfies AssetData;
