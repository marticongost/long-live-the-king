import { type TacticData } from '$lib/models/cards';

export default {
	title: 'Ajuda',
	discardBonus: { intrigue: 1 },
	capabilities: [
		{
			type: 'reaction',
			trigger: 'preparingForDuel',
			effects: 'Els demés {players} poden donar-te qualsevol quantitat dels seus recursos.'
		},
		{
			type: 'reaction',
			trigger: 'afterDuelDeclared',
			cost: { power: 1 },
			effects: 'Si ets el Rei, cancel·la el duel.'
		}
	]
} satisfies TacticData;
