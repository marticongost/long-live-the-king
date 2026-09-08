import type { AssetData } from '$lib/models/cards';

export default {
	title: 'Assassí',
	properties: ['illicit', 'retinue'],
	hidden: true,
	capabilities: [
		{
			title: 'Que sembli un accident...',
			type: 'secret',
			cost: { gold: 5 },
			effects:
				'Seleccionar un jugador {input text} i resoldre un {plot} contra ell. Si el {plot} té èxit, {execute} el jugador designat.'
		}
	]
} satisfies AssetData;
