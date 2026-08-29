export const kingdomStats = ['supremacy', 'wealth', 'taxes', 'happiness', 'food', 'might'] as const;

export type KingdomStat = (typeof kingdomStats)[number];
