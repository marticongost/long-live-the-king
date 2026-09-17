import { type TacticData } from '$lib/models/cards';

export default {
	title: 'Festival',
	properties: ['boost'],
	discardBonus: { gold: 1 },
	capabilities: [
		{
			type: 'conflict',
			cost: { gold: 2 },
			effects: 'El teu regne guanya {stability 1}.'
		}
	]
} satisfies TacticData;
