import type { OfficeData } from '$lib/models/cards';

export default {
	title: 'Canceller',
	capabilities: [
		{
			type: 'reaction',
			trigger: 'turnStart',
			effects: 'Guanya {power 2}.'
		},
		{
			title: 'Maniobres polítiques',
			type: 'action',
			cost: { power: 1 },
			effects:
				'Roba una {law} i junta-la amb les cartes a la fila. Descarta una de les cartes, reordena la fila com tu vulguis.'
		},
		{
			title: 'Abolir llei',
			type: 'action',
			cost: { power: 1 },
			effects:
				'Escull una {law} en vigor al teu regne. La llei es submet a una nova {vote}. Si el vot fracassa, la llei es descarta.'
		}
	]
} satisfies OfficeData;
