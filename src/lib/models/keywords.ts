import { getProperties } from './properties';

export const keywords = {
	resource: 'recurs',
	office: 'càrrec',
	offices: 'càrrecs',
	card: 'carta',
	subject: 'súbdit',
	subjects: 'súbdits',
	law: 'llei',
	vote: 'votació',
	vigilance: 'vigilància',
	machination: 'maquinació',
	aggression: 'agressió',
	duel: 'Duel',
	exile: 'expulsar',
	exiled: 'expulsat',
	plot: 'complot',
	plots: 'complots',
	execute: 'executar',
	discard: 'descartar',
	exhaust: 'exhaurir',
	assets: 'actius',
	secrets: 'secrets',
	objectives: 'objectius',
	kingdomStat: 'indicador del regne',
	kingdomStats: 'indicadors del regne',
	assetsBid: "subhasta d'actius",
	assetsMarket: "mercat d'actius",
	lawsPool: 'fila de lleis',
	players: undefined,
	visible: undefined,
	hidden: undefined,
	action: undefined,
	conflict: undefined,
	...Object.fromEntries(getProperties().map((property) => [property.id, property.title]))
};

export type Keyword = keyof typeof keywords;
