import { Component, Prop, h } from '@stencil/core';
import { Crumb } from 'glyph-core';
import { Icon } from '../../utils/icons';
import { Flex } from '../../utils/layout';
import { cls } from '../../utils/utils';

@Component({
    tag: 'glyph-breadcrumbs',
    styleUrl: './breadcrumbs.scss',
    shadow: true,
})
export class BreadcrumbsComponent {
    /** Crumb property. Last one is displayed as active. Each crumb triggers a callback on click */
    @Prop() crumbs: Crumb[] = [];
    /** Extra i18n translation object */
    @Prop() i18n: { [key: string]: string } = {};

    private _handleClick = (crumb: Crumb, index: number) => () => {
        if (!this._isLast(index) && crumb.callback) {
            crumb.callback(crumb.name);
        }
    };

    private _isLast = (index: number) => {
        return index === this.crumbs.length - 1;
    };

    render() {
        return (
            <Flex row middle class="breadcrumbs__container">
                {this.crumbs?.map((crumb: Crumb, index: number) => (
                    <Flex
                        row
                        middle
                        class={cls('crumb__container', {
                            active: this._isLast(index),
                            clickable: !this._isLast(index) && crumb.callback,
                        })}
                    >
                        <span class="crumb" onClick={this._handleClick(crumb, index)}>
                            {this.i18n[crumb.name] || crumb.name}
                        </span>
                        {!this._isLast(index) && <Icon icon="chevron_right" />}
                    </Flex>
                ))}
            </Flex>
        );
    }
}
