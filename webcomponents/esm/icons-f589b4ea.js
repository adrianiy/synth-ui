import { h } from './index-13b2f165.js';
import { c as cls } from './utils-fe418092.js';

const Icon = (props, children) => {
  return (h("em", { class: cls(props.outlined ? 'material-icons-outlined' : 'material-icons', props.class), role: props.button && 'button', onClick: props.onClick }, props.icon || children));
};

export { Icon as I };
