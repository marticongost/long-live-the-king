import type { GoalData } from '$lib/models/cards';

export default {
	title: 'Taverna',
	properties: ['land'],
	discardBonus: { gold: 2 },
	capabilities: [
		{
			title: 'Rumors',
			type: 'action',
			effects: 'Guanyar {intrigue 1}. Límit un cop per torn.'
		},
		{
			title: 'Convido a la primera ronda!',
			type: 'action',
			cost: { gold: 2 },
			effects: 'El teu regne guanya {happiness 1}.'
		}
	]
} satisfies GoalData;
