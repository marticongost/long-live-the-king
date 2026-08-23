import type { OfficeData } from '$lib/models/cards';

export default {
	title: 'Canceller',
	capabilities: [
		{
			title: 'Animal polític',
			type: 'reaction',
			trigger: 'turnStart',
			effects: 'Guanya {power 2}, robar carta ({law}).'
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
