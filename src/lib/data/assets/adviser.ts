import type { AssetData } from '$lib/models/cards';

export default {
	title: 'Ma dreta',
	properties: ['retinue'],
	discardBonus: { power: 2 },
	capabilities: [
		{
			title: 'Consell',
			type: 'action',
			effects: 'Guanyar 1 carta.'
		}
	]
} satisfies AssetData;
