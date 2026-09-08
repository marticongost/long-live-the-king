import type { AssetData } from '$lib/models/cards';

export default {
	title: 'Port',
	properties: ['land', 'maritime'],
	capabilities: [
		{
			title: 'Guanys',
			type: 'action',
			effects: 'Guanyar {gold 2}.'
		}
	]
} satisfies AssetData;
