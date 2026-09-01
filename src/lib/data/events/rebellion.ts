import type { EventData } from '$lib/models/cards';

export default {
	title: 'Rebel·lió',
	capabilities: [
		{
			type: 'crisis',
			test: '{strength}',
			difficulty: '(5 - {happiness}) x {players}',
			highestContributionReward: '{prestige 1}',
			penalty: '{supremacy -1}, {happiness -1}. Si {happiness} és 1, {execute} al Rei.'
		}
	]
} satisfies EventData;
