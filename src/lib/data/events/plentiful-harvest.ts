import type { EventData } from '$lib/models/cards';

export default {
	title: 'Collita abundant',
	capabilities: [
		{
			type: 'reaction',
			trigger: 'turnStart',
			effects: 'El regne guanya {food 1}.'
		}
	]
} satisfies EventData;
