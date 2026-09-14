import type { EventData } from '$lib/models/cards';

export default {
	title: 'Rebel·lió',
	capabilities: [
		{
			type: 'crisis',
			test: '{strength}',
			difficulty: '(5 - {stability}) x {players}',
			highestContributionReward: '{prestige 1}',
			penalty: '{stability -2}. Si {stability} és 1, {execute} al Rei.'
		}
	]
} satisfies EventData;
