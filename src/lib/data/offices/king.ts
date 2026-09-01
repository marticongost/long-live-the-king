import type { OfficeData } from '$lib/models/cards';

export default {
	title: 'Rei',
	capabilities: [
		{ type: 'reaction', trigger: 'turnStart', effects: 'Guanya {power 1}' },
		{
			title: 'Reorganitzar el consell',
			type: 'action',
			cost: { power: 3 },
			effects: 'Assigna, reassigna o retira qualsevol número de {offices}.'
		},
		{
			title: 'Tirania',
			type: 'action',
			cost: { power: 1 },
			effects:
				'Escull 1+ {subjects}. Cada un ha de donar-te una {card} o un {resource} de la seva el·lecció.'
		}
	]
} satisfies OfficeData;
