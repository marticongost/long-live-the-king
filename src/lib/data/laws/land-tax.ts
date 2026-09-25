import type { LawData } from '$lib/models/cards';

export default {
	title: "Llei d'impost a la propietat",
	capabilities: [
		{
			type: 'reaction',
			trigger: 'turnStart',
			effects:
				'Si està en vigor, cada {players} del regne (excloent el Tresorer i el Rei) que tingui 2+ {land} {visible} ha de pagar {gold 1} al Tresorer.'
		}
	]
} satisfies LawData;
