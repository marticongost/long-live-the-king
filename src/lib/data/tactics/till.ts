import { type TacticData } from '$lib/models/cards';

export default {
	title: 'Sembrar',
	properties: ['boost'],
	discardBonus: { gold: 1 },
	capabilities: [
		{
			type: 'action',
			cost: { gold: 2 },
			effects: 'El teu regne guanya {food 1}.'
		}
	]
} satisfies TacticData;
