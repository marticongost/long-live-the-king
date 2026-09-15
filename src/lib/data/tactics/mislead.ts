import { type TacticData } from '$lib/models/cards';

export default {
	title: 'Depravació',
	discardBonus: { power: 1 },
	properties: ['machination', 'selfishness'],
	capabilities: [
		{
			title: 'Llop amb pell de xai',
			type: 'secret',
			effects:
				'Resol un {plot} contra el teu regne. Si té èxit, guanya {prestige 1} i {faith 1}, i el regne rep {grace -1}.'
		}
	]
} satisfies TacticData;
