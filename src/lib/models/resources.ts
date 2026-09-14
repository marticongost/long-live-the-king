export const resourceTypes = [
	'prestige',
	'power',
	'intrigue',
	'strength',
	'gold',
	'faith',
	'any',
	'favour'
] as const;

export type ResourceType = (typeof resourceTypes)[number];
