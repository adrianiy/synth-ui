import { Component, h, Prop, State } from '@stencil/core';
import { FilterOptionHeader, UIInterface } from 'glyph-core-poc';
import { Icon } from '../../../../utils/icons';
import { Flex } from '../../../../utils/layout';
import state from '../../../../utils/store/context.store';
import { cls } from '../../../../utils/utils';
import { inSearch, renderOptionDescription } from '../../utils/utils';

@Component({
    tag: 'glyph-filter-drilldown-options',
    styleUrl: 'drilldown-options.scss',
    shadow: true,
})
export class FilterDrilldownOptionsComponent {
    /** Filter options */
    @Prop() option: FilterOptionHeader;
    /** Filter chip interface ['MODERN', 'CLASSIC'] */
    @Prop() interface: string;
    /** Search value */
    @Prop() searchValue: string;
    /** Extra i18n translation object */
    @Prop() i18n: { [key: string]: string } = {};
    /** Option click event */
    @Prop() optionClick: (option: FilterOptionHeader) => (event: any) => void;
    /** Expanded flag */
    @Prop() expanded: boolean = false;

    /** Expanded state */
    @State() expandedState: boolean = false;

    componentWillLoad() {
        const anyActive = this.option.children.some(
            child => child.active || (this.searchValue && inSearch(child, this.searchValue, this.i18n)),
        );
        this.expandedState = this.expandedState || anyActive;
        this.interface = this.interface || state.interface;
    }

    private _handleClick = (event: any) => {
        this.expandedState = !this.expandedState;
        event?.stopPropagation();
        event?.preventDefault();
    };

    private _renderOptionsList = () => {
        const { children } = this.option;

        return (
            <glyph-filter-options-list
                listStyle={{ 'padding-left': 'var(--gui-padding--l)' }}
                options={children}
                i18n={this.i18n}
                interface={this.interface}
                searchValue={this.searchValue}
                optionClick={this.optionClick}
            />
        );
    };

    render() {
        const { description } = this.option;
        const expanded = this.expanded || this.expandedState;

        return (
            <Flex class="children__container">
                <Flex row middle class={cls('children--header', { expanded })} onClick={this._handleClick}>
                    {this.interface === UIInterface.redesign ? (
                        <glyph-icon icon={expanded ? 'chevron-right' : 'chevron-down'} class="expand-icon" />
                    ) : (
                        <Icon icon={expanded ? 'remove' : 'add'} class="expand-icon" />
                    )}
                    <span>{renderOptionDescription(description, this.searchValue)}</span>
                </Flex>
                {expanded && this._renderOptionsList()}
            </Flex>
        );
    }
}
