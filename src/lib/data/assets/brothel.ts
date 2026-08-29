import type { GoalData } from '$lib/models/cards';

export default {
	title: 'Burdell',
	properties: ['land', 'illicit'],
	discardBonus: { gold: 2 },
	capabilities: [
		{
			title: 'Guanys',
			type: 'action',
			effects: 'Guanyar {gold 1} o {intrigue 1}. Límit un cop per torn.'
		},
		{
			title: 'Confidències',
			type: 'action',
			cost: { intrigue: 1 },
			effects: 'Guanya una carta. Límit un cop per torn.'
		}
	]
} satisfies GoalData;
