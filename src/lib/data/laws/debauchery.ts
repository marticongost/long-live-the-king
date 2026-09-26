import type { LawData } from '$lib/models/cards';

export default {
	title: 'Llei de la disbauxa',
	properties: ['privilege'],
	capabilities: [
		{
			type: 'action',
			title: 'Caos i rauxa',
			cost: { favour: 1 },
			requirements: 'Només executable pel Bufó, si la llei està en vigor.',
			effects:
				'Llançar 1d6 i aplicar el resultat. 1: Disminuir un {kingdomStat} en 1. 2: Els {players} revelen i descarten una carta {tactic} o {asset} {hidden}. 3: Els {players} passen les seves {tactics} al següent jugador en sentit horari. 4: Els {players} guanyen {any 1}. 5: Els {players} guanyen una carta. 6: Augmentar un {kingdomStat} en 1.'
		}
	]
} satisfies LawData;
