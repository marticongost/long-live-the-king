import { type TacticData } from '$lib/models/cards';

export default {
	title: 'Reclutament',
	properties: ['boost'],
	discardBonus: { gold: 1 },
	capabilities: [
		{
			type: 'conflict',
			cost: { strength: 2 },
			effects: 'El teu regne guanya {might 1}.'
		}
	]
} satisfies TacticData;
