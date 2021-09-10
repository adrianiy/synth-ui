'use strict';

const index = require('./index-556e1ddd.js');
const utils = require('./utils-69695228.js');

const Icon = (props, children) => {
  return (index.h("em", { class: utils.cls(props.outlined ? 'material-icons-outlined' : 'material-icons', props.class), role: props.button && 'button', onClick: props.onClick }, props.icon || children));
};

exports.Icon = Icon;
