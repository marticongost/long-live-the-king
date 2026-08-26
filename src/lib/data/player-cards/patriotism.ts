import { type PlayerCardData } from '$lib/models/cards';

export default {
	title: 'Patriotisme',
	discardBonus: { gold: 1 },
	capabilities: [
		{
			title: 'Enfortir el regne',
			type: 'action',
			cost: { power: 2 },
			effects: 'El teu regne guanya {supremacy 1}.'
		}
	]
} satisfies PlayerCardData;
