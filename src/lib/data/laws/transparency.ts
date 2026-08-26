import type { GoalData } from '$lib/models/cards';

export default {
	title: 'Llei de transparència',
	discardBonus: { power: 1 },
	capabilities: [
		{
			title: 'Proposar la llei',
			type: 'action',
			effects: 'Iniciar una {vote}. Si té èxit, la llei entra en vigor. Si no, descartar la carta.'
		},
		{
			title: 'Efecte',
			type: 'constant',
			effects:
				'Un cop entri en vigor, tots els membres del regne han de jugar amb els recursos visibles.'
		}
	]
} satisfies GoalData;
