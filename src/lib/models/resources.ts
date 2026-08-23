export const resourceTypes = ['prestige', 'power', 'intrigue', 'might', 'gold'] as const;

export type ResourceType = (typeof resourceTypes)[number];
