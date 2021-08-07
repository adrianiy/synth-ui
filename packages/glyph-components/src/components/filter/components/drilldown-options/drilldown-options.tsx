import { Component, h, Prop, State } from '@stencil/core';
import { FilterOptionHeader, UIInterface } from 'glyph-core';
import { Icon } from '../../../../utils/icons';
import { Flex } from '../../../../utils/layout';
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
    @Prop() interface: UIInterface = UIInterface.classic;
    /** Search value */
    @Prop() searchValue: string;
    /** Option click event */
    @Prop() optionClick: (option: FilterOptionHeader) => (event: any) => void;
    /** Expanded flag */
    @Prop() expanded: boolean = false;

    /** Expanded state */
    @State() expandedState: boolean = false;

    componentWillLoad() {
        this.expandedState = this.expanded;
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
                listStyle={{ 'padding-left': 'var(--gui-padding--m)' }}
                options={children}
                interface={this.interface}
                searchValue={this.searchValue}
                optionClick={this.optionClick}
            />
        );
    };

    render() {
        const { children, description } = this.option;
        const anyActive = children.some(
            child => child.active || (this.searchValue && inSearch(child, this.searchValue)),
        );
        const expanded = this.expandedState || anyActive;

        return (
            <Flex class="children__container">
                <Flex row middle class={cls('children--header', { expanded })} onClick={this._handleClick}>
                    <Icon icon={expanded ? 'remove' : 'add'} class="expand-icon" />
                    <span>{renderOptionDescription(description, this.searchValue)}</span>
                </Flex>
                {expanded && this._renderOptionsList()}
            </Flex>
        );
    }
}
