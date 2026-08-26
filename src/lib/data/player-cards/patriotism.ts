import { type PlayerCardData } from '$lib/models/cards';

export default {
	title: 'Patriotisme',
	capabilities: [
		{
			type: 'single-choice',
			choices: [
				{
					title: 'Enfortir el regne',
					type: 'action',
					cost: { power: 2 },
					effects: 'El teu regne guanya {supremacy 1}.'
				},
				{
					title: 'Descartar',
					type: 'action',
					effects: 'Descartar aquesta carta per guanyar {gold 1}.'
				}
			]
		}
	]
} satisfies PlayerCardData;
