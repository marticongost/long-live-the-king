const propertyData = {
	// Card types (implicit properties)
	event: 'Esdeveniment',
	office: 'Càrrec',
	goal: 'Objectiu',
	tactic: 'Tàctica',
	asset: 'Propietat',
	law: 'Llei',

	// Card sub-types (explicit properties)
	machination: 'Maquinació',
	agression: 'Agressió',
	magic: 'Màgia',
	land: 'Terres',
	illicit: 'Il·lícit'
} as const;

export type PropertyId = keyof typeof propertyData;

export class Property {
	readonly id: string;
	readonly title: string;

	constructor(id: string, title: string) {
		this.id = id;
		this.title = title;
	}
}

const propertiesMap = {} as Record<PropertyId, Property>;

for (const [id, title] of Object.entries(propertyData)) {
	propertiesMap[id as PropertyId] = new Property(id, title);
}

export function getProperty(id: PropertyId): Property {
	return propertiesMap[id];
}

export function getProperties(): ReadonlyArray<Property> {
	return Object.values(propertiesMap);
}
