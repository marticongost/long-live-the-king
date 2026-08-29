import type { GoalData } from '$lib/models/cards';

export default {
	title: 'Generositat reial',
	capabilities: [
		{
			title: 'Resolució',
			type: 'reaction',
			trigger: 'whenRevealed',
			effects:
				"El Rei revela tantes cartes com {players} al regne, i en dona una a cada un. El rei escull quina carta donar a cada jugador, i s'assigna una de les cartes a si mateix."
		}
	]
} satisfies GoalData;
