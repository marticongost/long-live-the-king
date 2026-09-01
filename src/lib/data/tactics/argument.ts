import { type TacticData } from '$lib/models/cards';

export default {
	title: 'Argumentació',
	discardBonus: { power: 1 },
	properties: [],
	capabilities: [
		{
			title: 'Convèncer',
			type: 'reaction',
			trigger: 'voting',
			cost: { power: 1 },
			effects: 'Suma +/- 3 al resultat de la {vote}.'
		},
		{
			title: 'Vet reial',
			type: 'reaction',
			trigger: 'voting',
			cost: { power: 1 },
			effects: 'Si ets el Rei, la {vote} finalitza en fracàs i la llei proposada es descarta.'
		}
	]
} satisfies TacticData;
