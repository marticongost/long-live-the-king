import { css, cx } from '@emotion/css';
import type { CSSObject } from '@emotion/css/create-instance';

export const styleVariants = <T>(values: Array<T>): ((value: T) => symbol) => {
	const variants = new Map<T, symbol>();
	for (const value of values) {
		variants.set(value, Symbol(String(value)));
	}
	return (value: T) => {
		const variant = variants.get(value);
		if (!variant) {
			throw new Error(`Unknown variant: ${value}`);
		}
		return variant;
	};
};

export const styles = <R extends Record<string, CSSObject>>(
	rules: R
): Record<keyof R & string, string> => {
	const classNames = {} as Record<keyof R & string, string>;
	for (const partName of Object.keys(rules)) {
		const partStyles = rules[partName as keyof R] as CSSObject;
		classNames[partName as keyof R & string] = css({ label: partName, ...partStyles });
	}
	return classNames;
};

export const multipleStyles = <R extends Record<string, CSSObject>>(
	rules: R
): ((variant: string) => Record<keyof R & string, string>) => {
	const baseClassNames = {} as Record<string, string>;
	const partVariants = {} as Record<string, Record<symbol, string>>;
	const variantsByDescription = new Map<string, symbol>();

	for (const partName of Object.keys(rules)) {
		const partRecord = rules[partName as keyof R] as unknown as Record<PropertyKey, unknown>;
		const partStyles: CSSObject = {};
		const variantStyles: Record<symbol, string> = {};
		partVariants[partName] = variantStyles;

		for (const [key, value] of Object.entries(partRecord)) {
			(partStyles as Record<string, unknown>)[key] = value;
		}

		for (const variant of Object.getOwnPropertySymbols(partRecord)) {
			variantStyles[variant] = css({
				label: `${partName}--${variant.description ?? 'variant'}`,
				...(partRecord[variant] as CSSObject)
			});
			variantsByDescription.set(variant.description ?? 'variant', variant);
		}

		baseClassNames[partName] = css({ label: partName, ...partStyles });
	}

	return (variant: string): Record<keyof R & string, string> => {
		const variantSymbol = variantsByDescription.get(variant);
		const classNames = {} as Record<keyof R & string, string>;
		for (const partName of Object.keys(baseClassNames)) {
			const variantClassName = variantSymbol ? partVariants[partName][variantSymbol] : undefined;
			classNames[partName as keyof R & string] = variantClassName
				? cx(baseClassNames[partName], variantClassName)
				: baseClassNames[partName];
		}
		return classNames;
	};
};

export const mergeRules = (...rules: Array<CSSObject>): CSSObject => {
	const result: CSSObject = {};
	for (const rule of rules) {
		for (const [key, value] of Object.entries(rule)) {
			const existing = result[key as keyof CSSObject];
			if (
				typeof value === 'object' &&
				value !== null &&
				!Array.isArray(value) &&
				typeof existing === 'object' &&
				existing !== null &&
				!Array.isArray(existing)
			) {
				result[key as keyof CSSObject] = { ...existing, ...value } as never;
			} else {
				result[key as keyof CSSObject] = value as never;
			}
		}
	}
	return result;
};
