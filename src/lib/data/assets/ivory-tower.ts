import type { GoalData } from '$lib/models/cards';

export default {
	title: "Torre d'ivori",
	properties: ['land', 'magic'],
	discardBonus: { intrigue: 1, power: 1 },
	capabilities: [
		{
			title: 'Col·lecció de curiositats',
			type: 'reaction',
			trigger: 'gameEnd',
			effects: 'Si tens 4+ cartes amb el tret {magic}, guanya {prestige 1}.'
		},
		{
			title: 'Lloc de poder',
			type: 'reaction',
			trigger: 'turnStart',
			effects: 'Guanyar {power 1}.'
		}
	]
} satisfies GoalData;
