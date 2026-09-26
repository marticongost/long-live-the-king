import type { LawData } from '$lib/models/cards';

export default {
	title: 'Llei de crèdit',
	properties: ['privilege'],
	capabilities: [
		{
			type: 'action',
			title: 'Demanar crèdit',
			cost: { favour: 1 },
			requirements:
				'Només executable pel Tresorer, si la llei està en vigor i la casella inferior ≤ {wealth}.',
			effects: 'El Tresorer augmenta la casella inferior en X i guanya X {gold}.'
		},
		{
			type: 'reaction',
			trigger: 'turnStart',
			effects:
				'Deute: {input number}. Si > 0, el Tresorer paga {gold} = Deute. Si no pot, {wealth -1}. Reduir Deute en 1.'
		}
	]
} satisfies LawData;
