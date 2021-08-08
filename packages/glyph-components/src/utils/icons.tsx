import { FunctionalComponent, h } from '@stencil/core';
import { SewingIcon } from './sewing-icons';
import { cls } from './utils';

interface IconProps {
    icon?: string;
    outlined?: boolean;
    sewing?: boolean;
    button?: boolean;
    class?: string;
    onClick?: (event: MouseEvent) => any;
}

export const Icon: FunctionalComponent<IconProps> = (props, children) => {
    return props.sewing ? (
        <SewingIcon icon={props.icon} class={props.class} />
    ) : (
        <em
            class={cls(props.outlined ? 'material-icons-outlined' : 'material-icons', props.class)}
            role={props.button && 'button'}
            onClick={props.onClick}
        >
            {props.icon || children}
        </em>
    );
};
