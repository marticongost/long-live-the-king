import { buildCapability, type Capability, type CapabilitySpec } from './capabilities';
import { getProperty, type Property, type PropertyId } from './properties';
import { ResourceSet, type ResourceSetProps } from './resourcesets';

export const cardTypes = ['office', 'goal', 'event', 'law', 'tactic', 'asset', 'house'] as const;

export type CardType = (typeof cardTypes)[number];

export interface CardData {
	title: string;
	capabilities?: ReadonlyArray<CapabilitySpec>;
	properties?: ReadonlyArray<PropertyId>;
}

export abstract class Card {
	readonly id: string;
	readonly title: string;
	readonly capabilities: Array<Capability>;
	private readonly ownProperties: ReadonlyArray<PropertyId>;

	constructor(id: string, { title, capabilities, properties }: CardData) {
		this.id = id;
		this.title = title;
		this.capabilities = capabilities ? capabilities.map(buildCapability) : [];
		this.ownProperties = properties ?? [];
	}

	abstract get type(): CardType;

	/**
	 * Indicates whether the card is kept secret from other players (true) or must be
	 * shown publicly (false).
	 */
	get hidden(): boolean {
		return true;
	}

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

	override get hidden(): boolean {
		return false;
	}
}

export type GoalType = 'collective' | 'personal';

export interface GoalData extends CardData {
	goalType: GoalType;
}

export class Goal extends Card {
	readonly goalType: GoalType;

	constructor(id: string, { goalType, ...base }: GoalData) {
		super(id, base);
		this.goalType = goalType;
	}

	override get type(): CardType {
		return 'goal';
	}
}

export interface TacticData extends CardData {
	discardBonus?: ResourceSetProps;
}

export class Tactic extends Card {
	readonly discardBonus: ResourceSet;

	constructor(id: string, { discardBonus, ...base }: TacticData) {
		super(id, base);
		this.discardBonus = new ResourceSet(discardBonus ?? {});
	}

	override get type(): CardType {
		return 'tactic';
	}
}

export interface AssetData extends CardData {
	hidden?: boolean;
}

export class Asset extends Card {
	private readonly _hidden: boolean;

	constructor(id: string, { hidden = false, ...base }: AssetData) {
		super(id, base);
		this._hidden = hidden;
	}

	override get type(): CardType {
		return 'asset';
	}

	override get hidden(): boolean {
		return this._hidden;
	}
}

export type LawData = CardData;

export class Law extends Card {
	override get type(): CardType {
		return 'law';
	}
}

export type HouseData = CardData;

export class House extends Card {
	readonly houseCapabilities: ReadonlyArray<Capability>;

	constructor(id: string, { capabilities, ...base }: HouseData) {
		super(id, { capabilities: commonHouseCapabilities, ...base });
		this.houseCapabilities = (capabilities ?? []).map(buildCapability);
	}

	override get type(): CardType {
		return 'house';
	}

	override get hidden(): boolean {
		return false;
	}
}

const commonHouseCapabilities: ReadonlyArray<CapabilitySpec> = [
	{
		type: 'action',
		title: 'Proposar llei',
		cost: { power: 1 },
		effects: 'Sotmetre una llei de la fila a {vote}.'
	},
	{
		type: 'secret',
		title: 'Vigilar',
		effects:
			'Paga {input number} {intrigue} per establir la teva {vigilance} a aquesta mateixa quantitat.'
	}
] as const;
