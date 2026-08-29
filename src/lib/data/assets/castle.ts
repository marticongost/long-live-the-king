import type { GoalData } from '$lib/models/cards';

export default {
	title: 'Castell',
	properties: ['land'],
	discardBonus: { gold: 2 },
	capabilities: [
		{
			title: 'Fortalesa',
			type: 'action',
			effects: 'Guanyar {strength 1}. Límit un cop per torn.'
		},
		{
			title: 'Ampliació',
			type: 'action',
			cost: { gold: 2 },
			effects: 'El teu regne guanya {might 1}.'
		}
	]
} satisfies GoalData;
