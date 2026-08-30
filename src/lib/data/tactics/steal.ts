import { type TacticData } from '$lib/models/cards';

export default {
	title: 'Robar',
	discardBonus: { intrigue: 1 },
	properties: ['machination'],
	capabilities: [
		{
			title: 'Apropiació forçosa',
			type: 'secret',
			effects:
				'Escull un jugador {input text} i resol un {plot} contra ell. Si el {plot} té èxit, el director de joc et revela dues de les seves cartes {tactic} i/o {object}, escollides aleatòriament, i pots quedar-te una de les cartes.'
		}
	]
} satisfies TacticData;
