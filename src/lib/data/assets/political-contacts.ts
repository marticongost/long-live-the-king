import type { AssetData } from '$lib/models/cards';

export default {
	title: 'Contactes polítics',
	properties: ['retinue'],
	discardBonus: { power: 2 },
	hidden: true,
	capabilities: [
		{
			title: 'Engreixar la roda',
			type: 'secret',
			cost: { gold: 1 },
			effects: 'Guanyar {power 3}.'
		}
	]
} satisfies AssetData;
