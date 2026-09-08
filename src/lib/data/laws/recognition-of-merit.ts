import type { LawData } from '$lib/models/cards';

export default {
	title: 'Llei de reconeixement al mèrit',
	capabilities: [
		{
			type: 'constant',
			effects:
				'Si està en vigor, les recompenses als majors contribuents a les crisis doblen el seu valor.'
		}
	]
} satisfies LawData;
