export const kingdomStats = ['supremacy', 'wealth', 'taxes', 'happiness', 'food'] as const;

export type KingdomStat = (typeof kingdomStats)[number];
