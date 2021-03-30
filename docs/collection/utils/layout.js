import { h } from '@stencil/core';
import { cls } from './utils';
export const distributions = {
  SPACED: 'space-between',
  MIDDLE: 'middle',
  CENTER: 'center',
  LEFT: 'left',
  RIGHT: 'right',
  FULLSIZE: 'fl-1',
};
export const paddings = {
  BIG: 'padding--big',
  LARGE: 'padding--large',
  MEDIUM: 'padding--medium',
  SMALL: 'padding--small',
  TINY: 'padding--tiny',
};
const composeClassNames = (flexType, distribution, className, padding, verticalPadding, horizontalPadding) => {
  const vPadding = verticalPadding ? `${verticalPadding}--vertical` : '';
  const hPadding = horizontalPadding ? `${horizontalPadding}--horizontal` : '';
  return cls(flexType, distribution, className, padding, vPadding, hPadding);
};
export const RowLayout = ({ testId = '', distribution, className, id, padding, verticalPadding, horizontalPadding, onClick }, children) => (h("div", { "data-testid": testId, class: composeClassNames('row', distribution, className, padding, verticalPadding, horizontalPadding), onClick: onClick, id: id }, children));
export const ColumnLayout = ({ testId = '', distribution, className, id, padding, verticalPadding, horizontalPadding, onClick }, children) => (h("div", { "data-testid": testId, class: composeClassNames('column', distribution, className, padding, verticalPadding, horizontalPadding), onClick: onClick, id: id }, children));
