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
	exiled: 'expulsat',
	plot: 'complot',
	plots: 'complots',
	execute: 'executar',
	...Object.fromEntries(getProperties().map((property) => [property.id, property.title]))
};

export type Keyword = keyof typeof keywords;
