import { type TacticData } from '$lib/models/cards';

export default {
	title: 'Anticipació',
	discardBonus: { power: 1 },
	properties: [],
	capabilities: [
		{
			title: 'Un pas per endavant',
			type: 'reaction',
			trigger: 'targetedByDuel',
			cost: { power: 1 },
			effects: 'Cancel·la el {duel}.'
		}
	]
} satisfies TacticData;
