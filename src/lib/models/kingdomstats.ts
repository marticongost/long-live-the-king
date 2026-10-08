export const kingdomStatTypes = ['stability', 'wealth', 'taxes', 'might', 'grace'] as const;

export type KingdomStatType = (typeof kingdomStatTypes)[number];

export class KingdomStat {
	readonly type: KingdomStatType;
	readonly title: string;

	constructor(type: KingdomStatType, title: string) {
		this.type = type;
		this.title = title;
	}
}

const kingdomStats = {} as Record<KingdomStatType, KingdomStat>;

for (const [type, title] of Object.entries({
	stability: 'Estabilitat',
	wealth: 'Riquesa',
	taxes: 'Impostos',
	might: 'Exèrcit',
	grace: 'Gràcia'
} as Record<KingdomStatType, string>) as Array<[KingdomStatType, string]>) {
	kingdomStats[type] = new KingdomStat(type, title);
}

export function getKingdomStat(type: KingdomStatType): KingdomStat {
	return kingdomStats[type];
}
