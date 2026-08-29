import type { OfficeData } from '$lib/models/cards';

export default {
	title: 'Comandant',
	capabilities: [
		{
			title: 'Guardià del regne',
			type: 'reaction',
			trigger: 'turnStart',
			effects: 'Guanya {strength 3}, roba carta ({aggression}).'
		},
		{
			title: 'Cridar a files',
			type: 'action',
			cost: { power: 1 },
			effects: 'Guanya {strength 1}.'
		},
		{
			title: 'Intimidació',
			type: 'action',
			effects: '{duel} {strength}. El perdedor dona {power 1} al vencedor.'
		}
	]
} satisfies OfficeData;
