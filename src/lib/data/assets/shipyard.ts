import type { GoalData } from '$lib/models/cards';

export default {
	title: 'Port',
	properties: ['land'],
	discardBonus: { gold: 3 },
	capabilities: [
		{
			title: 'Guanys',
			type: 'action',
			effects: 'Guanyar {gold 2}. Límit un cop per torn.'
		}
	]
} satisfies GoalData;
