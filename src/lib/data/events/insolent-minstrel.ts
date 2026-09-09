import type { EventData } from '$lib/models/cards';

export default {
	title: 'Joglar insolent',
	capabilities: [
		{
			type: 'reaction',
			trigger: 'whenRevealed',
			effects:
				'Si no hi ha Rei, descartar la carta i robar-ne una altra. Si no, el rei escull entre perdre {prestige 1} o (si no pot, o no vol) causar {happiness -1} al regne.'
		}
	]
} satisfies EventData;
