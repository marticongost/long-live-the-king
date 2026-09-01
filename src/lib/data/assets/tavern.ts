import type { AssetData } from '$lib/models/cards';

export default {
	title: 'Taverna',
	properties: ['land'],
	discardBonus: { gold: 2 },
	capabilities: [
		{
			title: 'Rumors',
			type: 'action',
			effects: 'Guanyar {intrigue 1}.'
		},
		{
			title: 'Una ronda per tots!',
			type: 'action',
			cost: { gold: 2 },
			effects: 'El teu regne guanya {happiness 1}.'
		}
	]
} satisfies AssetData;
