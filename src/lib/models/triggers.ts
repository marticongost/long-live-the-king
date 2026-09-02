interface TriggerData {
	title: string;
}

const triggerData: Record<string, TriggerData> = {
	whenRevealed: { title: 'En ser revelada' },
	turnStart: { title: 'Inici del torn' },
	turnEnd: { title: 'Final del torn' },
	gameEnd: { title: 'Final de la partida' },
	actionActivated: { title: "Quan s'activi una acció" },
	voting: { title: 'Quan votis una llei' },
	ownerIsExecuted: { title: 'Quan siguis executat' }
};

export type TriggerType = keyof typeof triggerData;

export class Trigger {
	readonly type: TriggerType;
	readonly title: string;

	constructor(type: TriggerType, { title }: TriggerData) {
		this.type = type;
		this.title = title;
	}
}

const triggersMap = {} as Record<TriggerType, Trigger>;

for (const [type, data] of Object.entries(triggerData)) {
	triggersMap[type] = new Trigger(type, data);
}

export function getTrigger(type: TriggerType): Trigger {
	const trigger = triggersMap[type];
	if (!trigger) {
		throw new Error(`Unknown trigger: ${type}`);
	}
	return trigger;
}
