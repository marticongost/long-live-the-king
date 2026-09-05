import * as palette from './palette';

export const outlineColor = palette.sandal;
export const outline = `1px solid ${outlineColor}`;
export const mixin = { '&:focus': { outline, borderColor: outlineColor } };
