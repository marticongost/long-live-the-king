import type { AssetData } from '$lib/models/cards';

export default {
	title: 'Catedral',
	properties: ['land', 'holy'],
	capabilities: [
		{
			type: 'conflict',
			title: 'Centre de culte',
			effects: 'Guanyar {faith 2} i {gold 1}.'
		}
	]
} satisfies AssetData;
