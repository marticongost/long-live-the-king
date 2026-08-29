import type { GoalData } from '$lib/models/cards';

export default {
	title: 'Successió',
	capabilities: [
		{
			title: 'Resolució',
			type: 'reaction',
			trigger: 'turnEnd',
			effects:
				'{duel} {power} + {intrigue} + {strength} entre tots els membres del regne. Si el vencedor no és el Rei, el vencedor renúncia als seus càrrecs actuals i esdevé el nou Rei del regne.'
		}
	]
} satisfies GoalData;
