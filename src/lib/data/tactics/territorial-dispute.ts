import { type TacticData } from '$lib/models/cards';

export default {
	title: 'Disputa territorial',
	discardBonus: { power: 1 },
	properties: ['agression'],
	capabilities: [
		{
			type: 'action',
			cost: { power: 1 },
			effects:
				'Resol un {duel} {strength} contra un jugador. Si guanyes, roba una de les seves {land} {visible}.'
		}
	]
} satisfies TacticData;
