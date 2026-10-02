import { assertNever } from './components/utils';
import { type Capability } from './models/capabilities';
import type { Card } from './models/cards';

export function getCardIcon(card: Card): string {
	switch (card.type) {
		case 'office':
			return `offices/${card.id}.svg`;
		case 'goal':
			return `goals/${card.id}.svg`;
		case 'event':
			return `events/${card.id}.svg`;
		case 'law':
			return `laws/${card.id}.svg`;
		case 'tactic':
			return `tactics/${card.id}.svg`;
		case 'asset':
			return `assets/${card.id}.svg`;
		case 'house':
			return `houses/${card.id}.svg`;
		default:
			return assertNever(card.type, 'Unknown card type');
	}
}

export function getCapabilityIcon(capability: Capability): string {
	switch (capability.type) {
		case 'action':
			return `capabilities/action.svg`;
		case 'reaction':
			return `capabilities/reaction.svg`;
		case 'constant':
			return `capabilities/constant.svg`;
		case 'secret':
			return `capabilities/secret.svg`;
		case 'crisis':
			return `capabilities/crisis.svg`;
		default:
			return assertNever(capability, 'Unknown capability type');
	}
}

export function getCapabilityTitle(capability: Capability): string {
	switch (capability.type) {
		case 'action':
		case 'secret':
			return capability.title;
		case 'reaction':
			return capability.trigger.title;
		case 'constant':
			return 'Constant';
		case 'crisis':
			return 'Crisis';
		default:
			return assertNever(capability, 'Unknown capability type');
	}
}

export function getCapabilitySubtitle(capability: Capability): string | undefined {
	if (capability.type === 'action') {
		return 'Acció';
	} else if (capability.type === 'secret') {
		return 'Secret';
	} else if (capability.type === 'reaction') {
		return 'Reacció';
	}
	return undefined;
}
