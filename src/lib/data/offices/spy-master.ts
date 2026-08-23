import type { OfficeData } from '$lib/models/cards';

export default {
	title: "Mestre d'espies",
	capabilities: [
		{
			title: 'Mercader de secrets',
			type: 'reaction',
			trigger: 'turnStart',
			effects: 'Guanyar {intrigue 3}, robar carta ({machination}).'
		},
		{
			title: 'Contraespionatge',
			type: 'secret',
			effects: 'Afegir {input number} {vigilance} al regne.'
		}
	]
} satisfies OfficeData;
