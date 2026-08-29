import type { GoalData } from '$lib/models/cards';

export default {
	title: 'Palau',
	properties: ['land'],
	discardBonus: { gold: 2 },
	capabilities: [
		{
			title: 'Ostentació',
			type: 'reaction',
			trigger: 'turnStart',
			effects: 'Guanyar {power 1}.'
		},
		{
			title: 'Banquet',
			type: 'action',
			cost: { gold: 3 },
			effects: 'El teu regne guanya {supremacy 1}.'
		}
	]
} satisfies GoalData;
