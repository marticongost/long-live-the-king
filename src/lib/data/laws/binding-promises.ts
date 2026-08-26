import type { GoalData } from '$lib/models/cards';

export default {
	title: 'Llei de promeses vinculants',
	capabilities: [
		{
			title: 'Efecte',
			type: 'constant',
			effects:
				"Les promeses fetes durant un intercanvi són vinculants. Si no es poden satisfer en el termini acordat, l'infractor perd {prestige 1}."
		}
	]
} satisfies GoalData;
