import { FunctionalComponent, h } from '@stencil/core';
import { cls } from './utils';

interface IconProps {
    icon?: string;
    outlined?: boolean;
    button?: boolean;
    className?: string;
    onClick?: (event: MouseEvent) => any;
}

export const Icon: FunctionalComponent<IconProps> = (props, children) => {
    return (
        <em
            class={cls(props.outlined ? 'material-icons-outlined' : 'material-icons', props.className)}
            role={props.button && 'button'}
            onClick={props.onClick}
        >
            {props.icon || children}
        </em>
    );
};
