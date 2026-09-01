import { type ResourceSetProps, ResourceSet } from './resourcesets';
import { getTrigger, type Trigger, type TriggerType } from './triggers';

export interface CapabilityCostFields {
	cost?: ResourceSetProps;
}

export interface CapabilityEffectsFields {
	effects: string;
}

export type ConcreteCapabilityData = CapabilityCostFields & CapabilityEffectsFields;

export interface ReactionData extends ConcreteCapabilityData {
	trigger: TriggerType;
}

export interface BaseActionData extends ConcreteCapabilityData {
	title?: string;
}

export interface CrisisData {
	test: string;
	difficulty: string;
	penalty: string;
	highestContributionReward: string;
}

export type ActionSpec = { type: 'action' } & BaseActionData;
export type SecretSpec = { type: 'secret' } & BaseActionData;
export type ReactionSpec = { type: 'reaction' } & ReactionData;
export type ConstantSpec = { type: 'constant' } & CapabilityEffectsFields;
export type CrisisSpec = { type: 'crisis' } & CrisisData;
export type CapabilitySpec = ActionSpec | SecretSpec | ReactionSpec | ConstantSpec | CrisisSpec;

export function buildCapability(spec: ActionSpec): Action;
export function buildCapability(spec: ReactionSpec): Reaction;
export function buildCapability(spec: ConstantSpec): Constant;
export function buildCapability(spec: CrisisSpec): Crisis;
export function buildCapability(spec: CapabilitySpec): Capability {
	switch (spec.type) {
		case 'action':
			return new Action(spec);
		case 'secret':
			return new Secret(spec);
		case 'reaction':
			return new Reaction(spec);
		case 'constant':
			return new Constant(spec);
		case 'crisis':
			return new Crisis(spec);
	}
}

export abstract class Capability {}

export abstract class ConcreteCapability extends Capability {
	readonly cost: ResourceSet;
	readonly effects: string;

	constructor({ cost, effects }: ConcreteCapabilityData) {
		super();
		this.cost = new ResourceSet(cost ?? {});
		this.effects = effects;
	}
}

export abstract class BaseAction extends ConcreteCapability {
	readonly title: string;

	constructor({ title = 'Aplicar', ...base }: BaseActionData) {
		super(base);
		this.title = title;
	}
}

export class Action extends BaseAction {}

export class Secret extends BaseAction {}

export class Reaction extends ConcreteCapability {
	readonly trigger: Trigger;

	constructor({ trigger, ...base }: ReactionData) {
		super(base);
		this.trigger = getTrigger(trigger);
	}
}

export class Constant extends Capability {
	readonly effects: string;

	constructor({ effects }: CapabilityEffectsFields) {
		super();
		this.effects = effects;
	}
}

export class Crisis extends Capability {
	readonly test: string;
	readonly difficulty: string;
	readonly penalty: string;
	readonly highestContributionReward: string;

	constructor({ test, difficulty, penalty, highestContributionReward }: CrisisData) {
		super();
		this.test = test;
		this.difficulty = difficulty;
		this.penalty = penalty;
		this.highestContributionReward = highestContributionReward;
	}
}
