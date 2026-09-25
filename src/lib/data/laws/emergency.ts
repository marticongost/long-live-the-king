import type { LawData } from '$lib/models/cards';

export default {
	title: "Llei d'emergència",
	capabilities: [
		{
			type: 'constant',
			effects:
				'Si està en vigor, els súbdits del Rei han de renunciar als X primers recursos que guanyin durant el torn, on X és el nombre de {kingdomStats} amb valor 1. A canvi, el rei augmenta en X × súbdits el {favour} que reparteix cada torn.'
		}
	]
} satisfies LawData;
