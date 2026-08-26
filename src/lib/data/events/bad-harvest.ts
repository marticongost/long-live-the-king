import type { GoalData } from '$lib/models/cards';

export default {
	title: 'Mala collita',
	capabilities: [
		{
			title: 'Resolució',
			type: 'reaction',
			trigger: 'gameEnd',
			effects: 'Foobar'
		}
	]
} satisfies GoalData;
