import type { EventData } from '$lib/models/cards';

export default {
	title: 'Casament',
	capabilities: [
		{
			type: 'reaction',
			trigger: 'whenRevealed',
			effects:
				'{duel} {gold} entre tots els {players} del regne. Els guanyadors guanyen {prestige 1}.'
		}
	]
} satisfies EventData;
