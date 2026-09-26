import type { LawData } from '$lib/models/cards';

export default {
	title: 'Llei de mobilització',
	properties: ['privilege'],
	capabilities: [
		{
			type: 'action',
			title: 'Cridar a files',
			cost: { favour: 1 },
			requirements: 'Només executable pel Comandant, si la llei està en vigor.',
			effects: 'Cada jugador del regne perd {any 1} i guanya {strength 1}.'
		}
	]
} satisfies LawData;
