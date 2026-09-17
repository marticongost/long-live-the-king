import { type TacticData } from '$lib/models/cards';

export default {
	title: 'Penitència',
	properties: ['boost'],
	discardBonus: { gold: 1 },
	capabilities: [
		{
			type: 'conflict',
			cost: { faith: 2 },
			effects: 'El teu regne guanya {grace 1}.'
		}
	]
} satisfies TacticData;
