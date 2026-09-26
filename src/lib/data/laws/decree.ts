import type { LawData } from '$lib/models/cards';

export default {
	title: 'Llei de decrets',
	properties: ['privilege'],
	capabilities: [
		{
			type: 'conflict',
			title: 'Decretar',
			cost: { favour: 1 },
			requirements: 'Només executable pel Canceller, si la llei està en vigor.',
			effects: 'Buscar una llei a la pila i posar-la a votació.'
		}
	]
} satisfies LawData;
