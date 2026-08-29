export const resourceTypes = ['prestige', 'power', 'intrigue', 'strength', 'gold'] as const;

export type ResourceType = (typeof resourceTypes)[number];
