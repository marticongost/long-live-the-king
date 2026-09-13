import { type TacticData } from '$lib/models/cards';

export default {
	title: 'Defensar-se',
	discardBonus: { power: 1 },
	properties: ['machination', 'selfishness'],
	capabilities: [
		{
			title: 'No els calen les meves tropes...',
			type: 'secret',
			effects:
				'Resol un {plot} contra el teu regne. Si té èxit, guanya {prestige 1} i {strength 1}, i el regne rep {might -1}.'
		}
	]
} satisfies TacticData;
