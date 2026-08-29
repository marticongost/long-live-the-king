import type { GoalData } from '$lib/models/cards';

export default {
	title: 'Ciutat',
	properties: ['land'],
	discardBonus: { power: 2 },
	capabilities: [
		{
			title: 'Centre de poder',
			type: 'reaction',
			trigger: 'turnStart',
			effects:
				'Guanyar {input check} {power 1}, {input check} {gold 1}, {input check} {intrigue 1} o {input check} {might 1}.'
		}
	]
} satisfies GoalData;
