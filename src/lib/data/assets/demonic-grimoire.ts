import type { AssetData } from '$lib/models/cards';

export default {
	title: 'Grimori demoníac',
	properties: ['magic', 'object', 'illicit'],
	discardBonus: { gold: 2 },
	hidden: true,
	capabilities: [
		{
			title: 'Ritual a la llum de la lluna',
			type: 'secret',
			cost: { power: 1, intrigue: 1 },
			effects:
				'Resoldre un {plot} contra el teu regne. Si té èxit, el teu regne pateix {input check} {wealth -1} o {input check} {food -1} o {input check} {happiness -1} i tu guanyes {power 3} i {prestige 1}.'
		}
	]
} satisfies AssetData;
