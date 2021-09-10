var __rest = (this && this.__rest) || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
import { h } from '@stencil/core';
import { cls } from './utils';
const getDistribution = (props) => {
  const flexType = props.row ? 'row' : 'column';
  const flexDist = Object.keys(props)
    .filter(key => props[key])
    .filter(Boolean)
    .join(' ');
  return `${flexType} ${flexDist}`.trim();
};
export const Flex = (props, children) => {
  if (props.row) {
    return h(RowLayout, Object.assign({}, props), children);
  }
  else {
    return h(ColumnLayout, Object.assign({}, props), children);
  }
};
export const RowLayout = (props, children) => {
  const { testId = '', class: className, style, id, onClick, onMouseEnter, onMouseLeave, ref } = props, rest = __rest(props, ["testId", "class", "style", "id", "onClick", "onMouseEnter", "onMouseLeave", "ref"]);
  return (h("div", { "data-testid": testId, class: cls('row', getDistribution(rest), className), style: style, onClick: onClick, onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave, id: id, ref: ref }, children));
};
export const ColumnLayout = (props, children) => {
  const { testId = '', class: className, style, id, onClick, onMouseEnter, onMouseLeave, ref } = props, rest = __rest(props, ["testId", "class", "style", "id", "onClick", "onMouseEnter", "onMouseLeave", "ref"]);
  return (h("div", { "data-testid": testId, class: cls('column', getDistribution(rest), className), style: style, onClick: onClick, onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave, id: id, ref: ref }, children));
};
