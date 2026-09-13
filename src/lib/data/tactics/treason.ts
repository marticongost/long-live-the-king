import { type TacticData } from '$lib/models/cards';

export default {
	title: 'Traïció',
	discardBonus: { power: 1 },
	properties: ['machination', 'selfishness'],
	capabilities: [
		{
			title: 'Que ha fet el rei per mi?',
			type: 'secret',
			effects:
				'Resol un {plot} contra el teu regne. Si té èxit, guanya {prestige 1} i {intrigue 1}, i el regne rep {supremacy -1}.'
		}
	]
} satisfies TacticData;
