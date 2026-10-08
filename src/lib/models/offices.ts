export const officeTypes = [
	'king',
	'chancellor',
	'marshal',
	'treasurer',
	'bishop',
	'spy-master',
	'jester'
] as const;

export type OfficeType = (typeof officeTypes)[number];

const names: Record<OfficeType, string> = {
	king: 'Rei',
	chancellor: 'Canceller',
	marshal: 'Comandant',
	treasurer: 'Tresorer',
	bishop: 'Bisbe',
	'spy-master': "Mestre d'espies",
	jester: 'Bufó'
};

export function getOfficeName(type: OfficeType): string {
	return names[type];
}
