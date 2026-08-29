import type { GoalData } from '$lib/models/cards';

export default {
	title: 'Terrenys de cultiu',
	properties: ['land'],
	discardBonus: { gold: 2 },
	capabilities: [
		{
			title: 'Impostos',
			type: 'reaction',
			trigger: 'turnStart',
			effects: 'Guanyar {gold 1}.'
		},
		{
			title: 'Collita',
			type: 'action',
			cost: { gold: 2 },
			effects: 'El teu regne guanya {food 1}.'
		}
	]
} satisfies GoalData;
