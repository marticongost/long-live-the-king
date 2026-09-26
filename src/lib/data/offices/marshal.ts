import type { OfficeData } from '$lib/models/cards';

export default {
	title: 'Comandant',
	capabilities: [
		{
			type: 'reaction',
			trigger: 'turnStart',
			effects: 'Guanya {strength 2}.'
		},
		{
			title: 'Preparacions de guerra',
			type: 'action',
			cost: { strength: 3 },
			effects: 'El teu regne guanya {might 1}.'
		},
		{
			title: 'Intimidació',
			type: 'action',
			effects: '{duel} {strength}. El perdedor dona {power 1} al vencedor.'
		}
	]
} satisfies OfficeData;
