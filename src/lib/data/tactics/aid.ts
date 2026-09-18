import { type TacticData } from '$lib/models/cards';

export default {
	title: 'Ajuda',
	discardBonus: { intrigue: 1 },
	capabilities: [
		{
			type: 'reaction',
			trigger: 'afterDuelDeclared',
			effects: 'Els demés {players} poden donar-te qualsevol quantitat dels seus recursos.'
		}
	]
} satisfies TacticData;
