import type { ResourceType } from './resources';

export type ResourceSpec = number | string;

export type ResourceSetProps = Partial<Record<ResourceType, ResourceSpec>>;

export class ResourceSet {
	readonly prestige: ResourceSpec;
	readonly power: ResourceSpec;
	readonly intrigue: ResourceSpec;
	readonly strength: ResourceSpec;
	readonly gold: ResourceSpec;
	readonly faith: ResourceSpec;
	readonly any: ResourceSpec;
	readonly favour: ResourceSpec;

	constructor({ prestige, power, intrigue, strength, gold, faith, any, favour }: ResourceSetProps) {
		this.prestige = prestige ?? 0;
		this.power = power ?? 0;
		this.intrigue = intrigue ?? 0;
		this.strength = strength ?? 0;
		this.gold = gold ?? 0;
		this.faith = faith ?? 0;
		this.any = any ?? 0;
		this.favour = favour ?? 0;
	}

	empty(): boolean {
		return (
			!this.prestige &&
			!this.power &&
			!this.intrigue &&
			!this.strength &&
			!this.gold &&
			!this.faith &&
			!this.any &&
			!this.favour
		);
	}
}
