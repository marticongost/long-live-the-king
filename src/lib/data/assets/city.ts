import type { GoalData } from '$lib/models/cards';

export default {
	title: 'Ciutat',
	properties: ['land'],
	discardBonus: { power: 2, gold: 2 },
	capabilities: [
		{
			title: 'Centre de poder',
			type: 'action',
			effects: 'Guanyar {power 2}, {gold 2}, {intrigue 2} o {strength 2}. Límit un cop per torn.'
		}
	]
} satisfies GoalData;
