import type { OfficeData } from '$lib/models/cards';

export default {
	title: 'Comandant',
	capabilities: [
		{
			title: 'Guardià del regne',
			type: 'reaction',
			trigger: 'turnStart',
			effects: 'Guanya {might 3}, roba carta ({aggression}).'
		},
		{
			title: 'Cridar a files',
			type: 'action',
			cost: { power: 1 },
			effects: 'Guanya {might 1}.'
		},
		{
			title: 'Intimidació',
			type: 'action',
			effects: '{duel} {might}. El perdedor dona {power 1} al vencedor.'
		}
	]
} satisfies OfficeData;
