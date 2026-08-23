import { type PlayerCardData } from '$lib/models/cards';

export default {
	title: 'Corrupció',
	capabilities: [
		{
			type: 'single-choice',
			choices: [
				{
					title: 'Segur que ningú ho notarà...',
					type: 'secret',
					effects:
						'Resol un {plot} contra el teu regne. Si té èxit, guanya {prestige 1} i {gold 1}, i el regne rep {wealth -1}.'
				},
				{
					title: 'Descartar',
					type: 'action',
					effects: 'Descartar aquesta carta per guanyar {power 1}.'
				}
			]
		}
	]
} satisfies PlayerCardData;
