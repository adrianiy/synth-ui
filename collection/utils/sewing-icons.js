import { h } from '@stencil/core';
import Actions from './sewing/actions';
import Alerts from './sewing/alerts';
import Arrows from './sewing/arrows';
import Business from './sewing/business';
import Care from './sewing/care';
import Controls from './sewing/controls';
import Others from './sewing/others';
import Products from './sewing/products';
import Sections from './sewing/sections';
import Sustainability from './sewing/sustainability';
import { actions, alerts, arrows, business, care, controls, others, products, sections, sustainability, } from './sewing';
const _getIcon = (props) => {
  if (actions.includes(props.icon)) {
    return h(Actions, Object.assign({}, props));
  }
  if (alerts.includes(props.icon)) {
    return h(Alerts, Object.assign({}, props));
  }
  if (arrows.includes(props.icon)) {
    return h(Arrows, Object.assign({}, props));
  }
  if (business.includes(props.icon)) {
    return h(Business, Object.assign({}, props));
  }
  if (care.includes(props.icon)) {
    return h(Care, Object.assign({}, props));
  }
  if (controls.includes(props.icon)) {
    return h(Controls, Object.assign({}, props));
  }
  if (others.includes(props.icon)) {
    return h(Others, Object.assign({}, props));
  }
  if (products.includes(props.icon)) {
    return h(Products, Object.assign({}, props));
  }
  if (sections.includes(props.icon)) {
    return h(Sections, Object.assign({}, props));
  }
  if (sustainability.includes(props.icon)) {
    return h(Sustainability, Object.assign({}, props));
  }
};
export const SewingIcon = (props) => {
  return (h("div", { class: "container" },
    h("svg", { display: "none" }),
    _getIcon(props)));
};
