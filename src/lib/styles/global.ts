import type { CSSObject } from '@emotion/css/create-instance';
import * as fonts from './fonts';
import { mergeRules } from './processor';
import * as reset from './reset';
import * as site from './site';
import * as text from './text';

export const globalStyles: CSSObject = mergeRules(reset.allElements, {
	'*, *::before, *::after': {
		boxSizing: 'border-box'
	},
	body: {
		fontFamily: fonts.text,
		backgroundColor: site.pageBackgroundColor,
		color: text.regularColor
	}
});
