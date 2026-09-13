import { type TacticData } from '$lib/models/cards';

export default {
	title: 'Crueltat',
	discardBonus: { power: 1 },
	properties: ['machination', 'selfishness'],
	capabilities: [
		{
			title: 'Res més que bruts pagesos...',
			type: 'secret',
			effects:
				'Resol un {plot} contra el teu regne. Si té èxit, guanya {prestige 1} i {power 1}, i el regne rep {happiness -1}.'
		}
	]
} satisfies TacticData;
