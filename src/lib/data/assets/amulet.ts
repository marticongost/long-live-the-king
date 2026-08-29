import type { GoalData } from '$lib/models/cards';

export default {
	title: 'Amulet',
	properties: ['magic'],
	discardBonus: { gold: 2 },
	capabilities: [
		{
			title: 'Protecció',
			type: 'reaction',
			trigger: 'ownerIsExecuted',
			cost: { power: 2 },
			effects: "Descartar aquesta carta per evitar els efectes de l'execució."
		}
	]
} satisfies GoalData;
