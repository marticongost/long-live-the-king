import type { AssetData } from '$lib/models/cards';

export default {
	title: 'Cornucòpia',
	properties: ['magic'],
	discardBonus: { gold: 2 },
	hidden: true,
	capabilities: [
		{
			title: 'Abundància',
			type: 'secret',
			cost: { power: 3 },
			effects: 'Guanyar {prestige 1}. El teu regne guanya {food 1}.'
		}
	]
} satisfies AssetData;
