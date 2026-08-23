import type { OfficeData } from '$lib/models/cards';

export default {
	title: 'Rei',
	capabilities: [
		{ title: 'Poder reial', type: 'reaction', trigger: 'turnStart', effects: 'Guanya {power 1}' },
		{ title: 'Autoritat', type: 'constant', effects: 'Trenques els empats en qualsevol disputa.' },
		{
			title: 'Nomenament',
			type: 'action',
			cost: { power: 3 },
			effects:
				"Escull un {office} de la teva reserva o assignat a un {subject}. Assigna'l a un {subject} de la teva el·lecció, o torna'l a la teva reserva."
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
