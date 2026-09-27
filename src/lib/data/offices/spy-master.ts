import type { OfficeData } from '$lib/models/cards';

export default {
	title: "Mestre d'espies",
	capabilities: [
		{
			type: 'reaction',
			trigger: 'turnStart',
			effects: 'Guanyar {intrigue 3}, robar carta ({machination}).'
		},
		{
			type: 'constant',
			effects:
				'La teva {vigilance} pot oposar-se a qualsevol {plot} al regne (no només els dirigits contra tu). Si vols, pots indicar quins jugadors estan exclosos de la teva protecció: {input list}.'
		}
	]
} satisfies OfficeData;
