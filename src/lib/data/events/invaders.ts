import type { GoalData } from '$lib/models/cards';

export default {
	title: 'Invasió',
	capabilities: [
		{
			title: 'Aportar tropes',
			type: 'action',
			effects: 'Afegir X {strength} sobre aquesta carta.'
		},
		{
			title: 'Batalla',
			type: 'reaction',
			trigger: 'turnEnd',
			effects:
				"Sumar {might} i el nombre de {strength} sobre la carta. Restar-hi el nombre de membres del regne. Si el total és < 5, per cada punt que falti cada membre del regne descarta una {asset} aleatòria. En cas contrari qui hagi aportat més {strength} guanya {prestige 1} (en cas d'empat ningú guanya {prestige})."
		}
	]
} satisfies GoalData;
