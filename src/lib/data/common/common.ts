import type { CommonData } from '$lib/models/cards';

export default {
	title: 'Accions comunes',
	capabilities: [
		{
			type: 'action',
			title: 'Proposar llei',
			cost: { power: 1 },
			effects: 'Sotmetre una llei de la fila a {vote}.'
		},
		{
			type: 'secret',
			title: 'Vigilar',
			effects: 'Paga {input intrigue} per establir la teva {vigilance} a aquesta mateixa quantitat.'
		},
		{
			type: 'secret',
			title: 'Adquisicions',
			effects:
				'Aposta {input gold} per adquirir {input text} i/o {input gold} per adquirir {input text}.'
		}
	]
} satisfies CommonData;
