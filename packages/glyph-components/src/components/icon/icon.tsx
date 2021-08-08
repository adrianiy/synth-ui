import { Component, Prop, h } from '@stencil/core';
import { Icon } from '../../utils/icons';
import { SewingIcon } from '../../utils/sewing-icons';
import { cls } from '../../utils/utils';

@Component({
    tag: 'glyph-icon',
    styleUrl: 'icon.scss',
    shadow: false,
})
export class IconComponent {
    /** icon name */
    @Prop() icon: string;
    /** render material icon */
    @Prop() material: boolean;
    /** class to use in icon */
    @Prop() class: string;
    /** render outlined icon (for material icons) */
    @Prop() outlined: boolean = false;
    /** render icon with button role */
    @Prop() button: boolean;
    /** click callback */
    @Prop() clickCbk: (event: MouseEvent) => any;

    render() {
        if (this.material) {
            return (
                <Icon
                    icon={this.icon}
                    outlined={this.outlined}
                    button={this.button}
                    class={cls('material-icon', this.class)}
                    onClick={this.clickCbk}
                />
            );
        } else {
            return (
                <SewingIcon
                    icon={this.icon}
                    class={cls('sewing-icon', this.class)}
                    button={this.button}
                    onClick={this.clickCbk}
                />
            );
        }
    }
}
