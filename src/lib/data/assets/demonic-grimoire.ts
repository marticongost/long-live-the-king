import type { GoalData } from '$lib/models/cards';

export default {
	title: 'Grimori demoníac',
	properties: ['magic'],
	discardBonus: { gold: 2 },
	capabilities: [
		{
			title: 'Ritual a la llum de la lluna',
			type: 'secret',
			effects: 'Guanyar {power 3}'
		}
	]
} satisfies GoalData;
