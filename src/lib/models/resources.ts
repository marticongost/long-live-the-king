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

export function isResourceType(value: string): value is ResourceType {
	return resourceTypes.includes(value as ResourceType);
}

export class Resource {
	readonly type: ResourceType;
	readonly title: string;

	constructor(type: ResourceType, title: string) {
		this.type = type;
		this.title = title;
	}
}

const resources = {} as Record<ResourceType, Resource>;

for (const [type, title] of Object.entries({
	prestige: 'Prestigi',
	power: 'Poder',
	intrigue: 'Intriga',
	strength: 'Força',
	gold: 'Diners',
	faith: 'Fè',
	any: 'Qualsevol',
	favour: 'Favor'
} as Record<ResourceType, string>) as Array<[ResourceType, string]>) {
	resources[type] = new Resource(type, title);
}

export function getResource(type: ResourceType): Resource {
	return resources[type];
}
