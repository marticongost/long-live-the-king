import type { LawData } from '$lib/models/cards';

export default {
	title: 'Llei de supervisió reial',
	discardBonus: { intrigue: 1 },
	capabilities: [
		{
			type: 'constant',
			effects: 'Si està en vigor, els vots del Rei compten el doble.'
		}
	]
} satisfies LawData;
