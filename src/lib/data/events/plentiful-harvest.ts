import type { GoalData } from '$lib/models/cards';

export default {
	title: 'Collita abundant',
	capabilities: [
		{
			title: 'Resolució',
			type: 'reaction',
			trigger: 'turnStart',
			effects: 'El regne guanya {food 1}.'
		}
	]
} satisfies GoalData;
