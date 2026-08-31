import { type TacticData } from '$lib/models/cards';

export default {
	title: 'Mercat negre',
	discardBonus: { power: 1 },
	properties: ['machination'],
	capabilities: [
		{
			title: 'Tot té un preu',
			type: 'secret',
			cost: { gold: 2 },
			effects:
				"Resol un {plot} contra el teu regne. Si té èxit, el director de joc t'ensenya dues cartes {hidden} aleatòries. Pots decidir quedar-te una de les cartes sense pagar cap cost addicional. Les cartes que no et quedis es descarten."
		}
	]
} satisfies TacticData;
