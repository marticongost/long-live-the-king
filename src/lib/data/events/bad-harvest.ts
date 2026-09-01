import type { EventData } from '$lib/models/cards';

export default {
	title: 'Mala collita',
	capabilities: [
		{
			type: 'reaction',
			trigger: 'turnStart',
			effects: 'El regne pateix {food -2}.'
		}
	]
} satisfies EventData;
