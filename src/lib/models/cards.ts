import { buildCapability, type Capability, type CapabilitySpec } from './capabilities';

export interface CardData {
	title: string;
	capabilities?: Array<CapabilitySpec>;
}

export abstract class Card {
	readonly id: string;
	readonly title: string;
	readonly capabilities: Array<Capability>;

	constructor(id: string, { title, capabilities }: CardData) {
		this.id = id;
		this.title = title;
		this.capabilities = capabilities ? capabilities.map(buildCapability) : [];
	}
}

export type EventData = CardData;
export class Event extends Card {}

export type OfficeData = CardData;
export class Office extends Card {}

export type GoalData = CardData;
export class Goal extends Card {}

export type PlayerCardData = CardData;
export class PlayerCard extends Card {}

export type LawData = PlayerCardData;
export class Law extends PlayerCard {}
