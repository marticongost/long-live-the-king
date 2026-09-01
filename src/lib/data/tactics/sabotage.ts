import { type TacticData } from '$lib/models/cards';

export default {
	title: 'Sabotatge',
	discardBonus: { intrigue: 1 },
	properties: ['machination'],
	capabilities: [
		{
			title: 'Un lamentable accident...',
			type: 'secret',
			effects:
				'Resol un {plot} contra un jugador {input text} i escull una {asset} {visible} que controli {input text}. Si el {plot} té èxit, la carta escollida no es pot utilitzar el torn següent.'
		}
	]
} satisfies TacticData;
