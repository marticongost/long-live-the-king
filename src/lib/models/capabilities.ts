import { type ResourceSetProps, ResourceSet } from './resourcesets';
import { getTrigger, type Trigger, type TriggerType } from './triggers';

export interface ConcreteCapabilityData {
	title: string;
	cost?: ResourceSetProps;
	effects: string;
}

export interface ReactionData extends ConcreteCapabilityData {
	trigger: TriggerType;
}

export interface CrisisData {
	test: string;
	difficulty: string;
	penalty: string;
	highestContributionReward: string;
}

export interface SingleChoiceData {
	choices: Array<CapabilitySpec>;
}

export type ActionSpec = { type: 'action' } & ConcreteCapabilityData;
export type SecretSpec = { type: 'secret' } & ConcreteCapabilityData;
export type ReactionSpec = { type: 'reaction' } & ReactionData;
export type ConstantSpec = { type: 'constant' } & ConcreteCapabilityData;
export type CrisisSpec = { type: 'crisis' } & CrisisData;
export type SingleChoiceSpec = { type: 'single-choice' } & SingleChoiceData;
export type CapabilitySpec =
	ActionSpec | SecretSpec | ReactionSpec | ConstantSpec | CrisisSpec | SingleChoiceSpec;

export function buildCapability(spec: ActionSpec): Action;
export function buildCapability(spec: ReactionSpec): Reaction;
export function buildCapability(spec: ConstantSpec): Constant;
export function buildCapability(spec: CrisisSpec): Crisis;
export function buildCapability(spec: CapabilitySpec): Capability;
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
		case 'single-choice':
			return new SingleChoice(spec);
	}
}

export abstract class Capability {}

export abstract class ConcreteCapability extends Capability {
	readonly title: string;
	readonly cost: ResourceSet;
	readonly effects: string;

	constructor({ title, cost, effects }: ConcreteCapabilityData) {
		super();
		this.title = title;
		this.cost = new ResourceSet(cost ?? {});
		this.effects = effects;
	}
}

export class Action extends ConcreteCapability {}

export class Secret extends ConcreteCapability {}

export class Reaction extends ConcreteCapability {
	readonly trigger: Trigger;

	constructor({ trigger, ...base }: ReactionData) {
		super(base);
		this.trigger = getTrigger(trigger);
	}
}

export class Constant extends ConcreteCapability {}

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

export class SingleChoice extends Capability {
	readonly choices: Array<Capability>;

	constructor({ choices }: SingleChoiceSpec) {
		super();
		this.choices = choices.map(buildCapability);
	}
}
