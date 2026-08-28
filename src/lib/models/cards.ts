import { buildCapability, type Capability, type CapabilitySpec } from './capabilities';
import { getProperty, type Property, type PropertyId } from './properties';
import { ResourceSet, type ResourceSetProps } from './resourcesets';

export const cardTypes = ['office', 'goal', 'event', 'law', 'tactic'] as const;

export type CardType = (typeof cardTypes)[number];

export interface CardData {
	title: string;
	capabilities?: ReadonlyArray<CapabilitySpec>;
	discardBonus?: ResourceSetProps;
	properties?: ReadonlyArray<PropertyId>;
}

export abstract class Card {
	readonly id: string;
	readonly title: string;
	readonly capabilities: Array<Capability>;
	readonly discardBonus: ResourceSet;
	private readonly ownProperties: ReadonlyArray<PropertyId>;

	constructor(id: string, { title, capabilities, discardBonus, properties }: CardData) {
		this.id = id;
		this.title = title;
		this.capabilities = capabilities ? capabilities.map(buildCapability) : [];
		this.discardBonus = new ResourceSet(discardBonus ?? {});
		this.ownProperties = properties ?? [];
	}

	abstract get type(): CardType;

	get properties(): ReadonlySet<Property> {
		return new Set([this.type, ...this.ownProperties].map(getProperty));
	}
}

export type EventData = CardData;

export class Event extends Card {
	override get type(): CardType {
		return 'event';
	}
}

export type OfficeData = CardData;

export class Office extends Card {
	override get type(): CardType {
		return 'office';
	}
}

export type GoalData = CardData;

export class Goal extends Card {
	override get type(): CardType {
		return 'goal';
	}
}

export type TacticData = CardData;

export class Tactic extends Card {
	override get type(): CardType {
		return 'tactic';
	}
}

export type LawData = CardData;

export class Law extends Tactic {
	override get type(): CardType {
		return 'law';
	}
}
