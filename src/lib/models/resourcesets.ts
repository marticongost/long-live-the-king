import type { ResourceType } from './resources';

export type ResourceSetProps = Partial<Record<ResourceType, number>>;

export class ResourceSet {
	readonly prestige: number;
	readonly power: number;
	readonly intrigue: number;
	readonly strength: number;
	readonly gold: number;

	constructor({ prestige, power, intrigue, strength, gold }: ResourceSetProps) {
		this.prestige = prestige ?? 0;
		this.power = power ?? 0;
		this.intrigue = intrigue ?? 0;
		this.strength = strength ?? 0;
		this.gold = gold ?? 0;
	}

	empty(): boolean {
		return !this.prestige && !this.power && !this.intrigue && !this.strength && !this.gold;
	}
}
