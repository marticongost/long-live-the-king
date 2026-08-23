import type { ResourceType } from './resources';

export type ResourceSetProps = Partial<Record<ResourceType, number>>;

export class ResourceSet {
	readonly prestige: number;
	readonly power: number;
	readonly intrigue: number;
	readonly might: number;
	readonly gold: number;

	constructor({ prestige, power, intrigue, might, gold }: ResourceSetProps) {
		this.prestige = prestige ?? 0;
		this.power = power ?? 0;
		this.intrigue = intrigue ?? 0;
		this.might = might ?? 0;
		this.gold = gold ?? 0;
	}

	empty(): boolean {
		return !this.prestige && !this.power && !this.intrigue && !this.might && !this.gold;
	}
}
