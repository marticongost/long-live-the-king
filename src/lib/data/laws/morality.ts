import type { LawData } from '$lib/models/cards';

export default {
	title: 'Llei de moralitat',
	properties: ['privilege'],
	capabilities: [
		{
			type: 'action',
			title: 'Denunciar els excessos',
			cost: { favour: 1 },
			requirements: 'Només executable pel Bisbe, si la llei està en vigor.',
			effects:
				"Seleccionar dos jugadors (excloent el Bisbe): si un dels jugadors seleccionats té més {assets} {visible} i {prestige} que l'altre, ha d'escollir entre donar {prestige 1} a l'altre jugador o donar un dels seus {assets} {visible} al Bisbe."
		}
	]
} satisfies LawData;
