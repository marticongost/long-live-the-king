import type { AssetData } from '$lib/models/cards';

export default {
	title: 'Poble',
	properties: ['land'],
	discardBonus: { power: 2 },
	capabilities: [
		{
			title: 'Nucli de població',
			type: 'action',
			effects: 'Guanyar {power 1}, {gold 1}, {intrigue 1} o {strength 1}.'
		}
	]
} satisfies AssetData;
