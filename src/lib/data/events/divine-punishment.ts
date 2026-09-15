import type { EventData } from '$lib/models/cards';

export default {
	title: 'Càstig diví',
	capabilities: [
		{
			type: 'reaction',
			trigger: 'whenRevealed',
			effects:
				'Si {grace} és < 0, roba i resol immediatament 2 cartes amb la propietat {adversity}, en ordre.'
		}
	]
} satisfies EventData;
