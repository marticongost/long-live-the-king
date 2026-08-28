import { type TacticData } from '$lib/models/cards';

export default {
	title: 'Corrupció',
	discardBonus: { power: 1 },
	properties: ['machination'],
	capabilities: [
		{
			title: 'Segur que ningú ho notarà...',
			type: 'secret',
			effects:
				'Resol un {plot} contra el teu regne. Si té èxit, guanya {prestige 1} i {gold 1}, i el regne rep {wealth -1}.'
		}
	]
} satisfies TacticData;
