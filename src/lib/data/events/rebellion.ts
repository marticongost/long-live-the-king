import type { GoalData } from '$lib/models/cards';

export default {
	title: 'Rebel·lió',
	capabilities: [
		{
			title: 'Resolució',
			type: 'reaction',
			trigger: 'gameEnd',
			effects: 'Foobar'
		}
	]
} satisfies GoalData;
