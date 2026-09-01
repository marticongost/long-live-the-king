import { type TacticData } from '$lib/models/cards';

export default {
	title: 'Argumentació',
	discardBonus: { power: 1 },
	properties: [],
	capabilities: [
		{
			type: 'reaction',
			trigger: 'voting',
			cost: { power: 1 },
			effects: 'Suma +/- 3 al resultat de la {vote}.'
		},
		{
			type: 'reaction',
			trigger: 'voting',
			cost: { power: 1 },
			effects:
				'Si ets el Rei, pots vetar la {vote} en curs: la {vote} finalitza en fracàs i la llei proposada es descarta.'
		}
	]
} satisfies TacticData;
