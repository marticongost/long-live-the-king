interface MapToRecordOptions<InputKey, InputValue, OutputKey, OutputValue> {
	mapKeys?: (key: InputKey) => OutputKey;
	mapValues?: (value: InputValue) => OutputValue;
	mapEntries?: (entry: [InputKey, InputValue]) => [OutputKey, OutputValue];
}

/** Converts a `Map` or `Record` into another `Record`, optionally mapping its keys
 * and/or values in the process.
 */
export const mapToRecord = <
	InputKey,
	InputValue,
	OutputKey extends string | number | symbol,
	OutputValue
>(
	source: Map<InputKey, InputValue> | Record<string | number | symbol, InputValue>,
	options: MapToRecordOptions<InputKey, InputValue, OutputKey, OutputValue>
): Record<OutputKey, OutputValue> => {
	const record = {} as Record<OutputKey, OutputValue>;
	const entries: Iterable<[InputKey, InputValue]> =
		source instanceof Map ? source.entries() : (Object.entries(source) as [InputKey, InputValue][]);
	for (const [key, value] of entries) {
		if (options.mapEntries) {
			const [outputKey, outputValue] = options.mapEntries([key, value]);
			record[outputKey] = outputValue;
		} else {
			const k = options.mapKeys ? options.mapKeys(key) : (key as unknown as OutputKey);
			const v = options.mapValues ? options.mapValues(value) : (value as unknown as OutputValue);
			record[k] = v;
		}
	}
	return record;
};
