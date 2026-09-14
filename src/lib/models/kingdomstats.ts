export const kingdomStats = ['stability', 'wealth', 'taxes', 'might', 'grace'] as const;

export type KingdomStat = (typeof kingdomStats)[number];
