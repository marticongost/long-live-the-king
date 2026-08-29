import type { GoalData } from '$lib/models/cards';

export default {
	title: 'Taverna',
	properties: ['land'],
	discardBonus: { gold: 2 },
	capabilities: [
		{
			title: 'Rumors',
			type: 'reaction',
			trigger: 'turnStart',
			effects: 'Guanyar {intrigue 1}.'
		},
		{
			title: 'Convido a la primera ronda!',
			type: 'action',
			cost: { gold: 2 },
			effects: 'El teu regne guanya {happiness 1}.'
		}
	]
} satisfies GoalData;
