import { type TacticData } from '$lib/models/cards';

export default {
	title: 'Acaparar',
	discardBonus: { power: 1 },
	properties: ['machination', 'selfishness'],
	capabilities: [
		{
			title: 'Cal tenir el rebost ben ple...',
			type: 'secret',
			effects:
				'Resol un {plot} contra el teu regne. Si té èxit, guanya {prestige 1} i {gold 1}, i el regne rep {food -1}.'
		}
	]
} satisfies TacticData;
