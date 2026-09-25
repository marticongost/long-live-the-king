import type { LawData } from '$lib/models/cards';

export default {
	title: "Llei d'imparcialitat",
	capabilities: [
		{
			type: 'constant',
			effects:
				'Si està en vigor, quan el Rei reparteixi el seu {favour} entre els demés jugadors ha de fer-ho de la forma més equitativa possible.'
		}
	]
} satisfies LawData;
