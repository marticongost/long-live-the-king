import type { LawData } from '$lib/models/cards';

export default {
	title: 'Llei de persecució a la bruixeria',
	discardBonus: { intrigue: 1 },
	capabilities: [
		{
			type: 'reaction',
			trigger: 'turnEnd',
			effects:
				'Si està en vigor, cada jugador revela 2 cartes aleatòries. Si 1+ de les cartes revelades o dels seus {assets} {visible} tenen el tret {magic}, {execute} el propietari.'
		}
	]
} satisfies LawData;
