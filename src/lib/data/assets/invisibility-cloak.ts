import type { GoalData } from '$lib/models/cards';

export default {
	title: "Capa d'invisibilitat",
	properties: ['magic'],
	discardBonus: { intrigue: 1, gold: 1 },
	capabilities: [
		{
			title: "Fondre's amb les ombres",
			type: 'constant',
			effects: 'Repeteix els daus fallits en resoldre els {plots} que hagis iniciat.'
		}
	]
} satisfies GoalData;
