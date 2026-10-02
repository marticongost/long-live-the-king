import type { Capability } from './capabilities';
import type { Card } from './cards';

export class CardCapability {
	readonly id: string;
	readonly card: Card;
	readonly capability: Capability;

	constructor(card: Card, capability: Capability, index: number) {
		this.card = card;
		this.capability = capability;
		this.id = `${card.id}:${index}`;
	}
}
