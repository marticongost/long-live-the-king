import type { GoalData } from '$lib/models/cards';

export default {
	title: 'Generositat reial',
	capabilities: [
		{
			title: 'Resolució',
			type: 'reaction',
			trigger: 'gameEnd',
			effects: 'Foobar'
		}
	]
} satisfies GoalData;
