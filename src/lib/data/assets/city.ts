import type { GoalData } from '$lib/models/cards';

export default {
	title: 'Ciutat',
	properties: ['land'],
	discardBonus: { power: 2 },
	capabilities: [
		{
			title: 'Centre de poder',
			type: 'action',
			effects: 'Guanyar {power 1}, {gold 1}, {intrigue 1} o {strength 1}. Límit un cop per torn.'
		}
	]
} satisfies GoalData;
