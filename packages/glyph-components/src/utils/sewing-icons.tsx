import { FunctionalComponent, h } from '@stencil/core';
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
import {
    actions,
    alerts,
    arrows,
    business,
    care,
    controls,
    others,
    products,
    sections,
    sustainability,
} from './sewing';

export interface SewingIconProps {
    icon?: string;
    class?: string;
    button?: boolean;
    onClick?: (event: MouseEvent) => any;
}

const _getIcon = (props: SewingIconProps) => {
    if (actions.includes(props.icon)) {
        return <Actions {...props} />;
    }
    if (alerts.includes(props.icon)) {
        return <Alerts {...props} />;
    }
    if (arrows.includes(props.icon)) {
        return <Arrows {...props} />;
    }
    if (business.includes(props.icon)) {
        return <Business {...props} />;
    }
    if (care.includes(props.icon)) {
        return <Care {...props} />;
    }
    if (controls.includes(props.icon)) {
        return <Controls {...props} />;
    }
    if (others.includes(props.icon)) {
        return <Others {...props} />;
    }
    if (products.includes(props.icon)) {
        return <Products {...props} />;
    }
    if (sections.includes(props.icon)) {
        return <Sections {...props} />;
    }
    if (sustainability.includes(props.icon)) {
        return <Sustainability {...props} />;
    }
};

export const SewingIcon: FunctionalComponent<SewingIconProps> = (props: SewingIconProps) => {
    return (
        <div class="container">
            <svg display="none" />
            {_getIcon(props)}
        </div>
    );
};
