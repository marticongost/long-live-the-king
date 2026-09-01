import type { OfficeData } from '$lib/models/cards';

export default {
	title: 'Comandant',
	capabilities: [
		{
			type: 'reaction',
			trigger: 'turnStart',
			effects: 'Guanya {strength 2}, roba carta ({aggression}).'
		},
		{
			title: 'Cridar a files',
			type: 'action',
			cost: { strength: 2 },
			effects: 'El regne guanya {might 1}.'
		},
		{
			title: 'Intimidació',
			type: 'action',
			effects: '{duel} {strength}. El perdedor dona {power 1} al vencedor.'
		}
	]
} satisfies OfficeData;
