import type { LawData } from '$lib/models/cards';

export default {
	title: "Llei d'inspecció",
	properties: ['privilege'],
	capabilities: [
		{
			type: 'conflict',
			title: 'Inspeccionar',
			cost: { favour: 1 },
			requirements: "Només executable pel Mestre d'espies, si la llei està en vigor.",
			effects:
				"El Mestre d'espies pot veure en secret els {assets} {hidden} o un dels {objectives} del jugador seleccionat."
		}
	]
} satisfies LawData;
