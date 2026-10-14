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
			type: 'preparation',
			title: 'Vigilar',
			effects: 'Paga {input intrigue} per establir la teva {vigilance} a aquesta mateixa quantitat.'
		},
		{
			type: 'preparation',
			title: 'Adquisicions',
			effects:
				'Aposta {input gold} per adquirir {input text} i/o {input gold} per adquirir {input text}.'
		},
		{
			type: 'action',
			title: 'Contribuir a la crisi',
			effects:
				'Contribueix amb {input gold} {input power} {input strength} {input faith} {input intrigue} {input favour} a la crisi.'
		}
	]
} satisfies CommonData;
