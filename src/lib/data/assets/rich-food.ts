import type { AssetData } from '$lib/models/cards';

export default {
	title: 'Menjars selectes',
	properties: ['object', 'food'],
	hidden: false,
	capabilities: [
		{
			title: 'Celebrar un banquet',
			type: 'action',
			cost: { gold: 3 },
			effects: 'Guanyar {prestige 1}.'
		},
		{
			title: 'Compartir',
			type: 'action',
			effects: 'El teu regne guanya {stability 1}. {discard} aquesta carta.'
		}
	]
} satisfies AssetData;
