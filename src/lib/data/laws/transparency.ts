import type { GoalData } from '$lib/models/cards';

export default {
	title: 'Llei de transparència',
	discardBonus: { intrigue: 1 },
	capabilities: [
		{
			title: 'Efecte',
			type: 'constant',
			effects:
				'Mentre estigui en vigor, tots els membres del regne han de jugar amb els recursos visibles.'
		}
	]
} satisfies GoalData;
