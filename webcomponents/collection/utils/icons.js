import { h } from '@stencil/core';
import { cls } from './utils';
export const Icon = (props, children) => {
  return (h("em", { class: cls(props.outlined ? 'material-icons-outlined' : 'material-icons', props.class), role: props.button && 'button', onClick: props.onClick }, props.icon || children));
};
