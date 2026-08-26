import type { GoalData } from '$lib/models/cards';

export default {
	title: 'Llei de transparència',
	capabilities: [
		{
			title: 'Efecte',
			type: 'constant',
			effects: 'Tots els membres del regne han de jugar amb els recursos visibles.'
		}
	]
} satisfies GoalData;
