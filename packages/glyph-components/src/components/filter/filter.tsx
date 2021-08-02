import { Component, Prop, h, State, Host, Element, Event, EventEmitter, Listen } from '@stencil/core';
import { Flex } from '../../utils/layout';
import { UIInterface, FilterOptionHeader, FilterSelectEvent } from 'glyph-core';
import { cls } from '../../utils/utils';
import { Icon } from '../../utils/icons';

@Component({
    tag: 'glyph-filter',
    styleUrl: 'filter.scss',
    shadow: true,
})
export class FilterComponent {
    /** Base path to get assets */
    @Prop() basePath: string;
    /** Filter description */
    @Prop() description: string;
    /** Filter plural */
    @Prop() plural: string;
    /** Filter options */
    @Prop() options: FilterOptionHeader[];
    /** Multiselect flag. True if filter allows multiselect toggler */
    @Prop() haveMultiSelect: boolean = true;
    /** This flag is true if multiselect is active */
    @Prop() multiSelect: boolean = false;
    /** Search placeholder */
    @Prop() searchPlaceholder: string;
    /** Extra i18n translation object */
    @Prop() i18n: { [key: string]: string } = {};
    /** **optional** force locale change if html lang is not interpreted */
    @Prop() locale: string;
    /** Filter chip interface ['MODERN', 'CLASSIC'] */
    @Prop() interface: UIInterface = UIInterface.classic;
    /** Option click event */
    @Event() optionClickEvent: EventEmitter<FilterSelectEvent>;
    /** Clear selected filters callback */
    @Event() clearEvent: EventEmitter<any>;
    /** Multiselect toggler callback */
    @Event() multiSelectEvent: EventEmitter<any>;
    /** Element reference */
    @Element() element: HTMLGlyphFilterElement;
    /** Filter expanded flag */
    @State() expanded: boolean = false;
    /** Filter search value */
    @State() searchValue: string;
    /** Active status flag */
    @State() active: boolean;
    /** Chip description value */
    @State() chipDescription: string;

    @Listen('click', { target: 'window' })
    clickOutside(event: any) {
        if (!event.composedPath().includes(this.element)) {
            this.expanded = false;
        }
    }

    componentWillRender() {
        this.active = this.options?.some(
            ({ active, children }) => active || children?.some(({ active: chActive }) => chActive),
        );
        this.chipDescription = this._getChipDescription();
    }

    private _getChipDescription = () => {
        if (!this.active) {
            return this.description;
        } else {
            const appliedChildren = this.options.map(opt => opt.children?.filter(({ active }) => active)).flat();
            const appliedOptions = this.options.filter(({ active }) => active);
            const applied = appliedChildren.concat(appliedOptions).filter(Boolean);
            const total = applied.length;
            const isPlural = total > 1;

            return isPlural ? `${total} ${this.plural}` : applied[0].description;
        }
    };

    private _expandFilter = () => {
        this.expanded = !this.expanded;
    };

    private _closeFilter = () => {
        this.expanded = false;
    };

    private _optionClick = (option: FilterOptionHeader) => {
        this.optionClickEvent.emit({ option });

        if (!this.multiSelect && !option.header) {
            this._expandFilter();
        }
    };

    private _multiSelectClick = () => {
        this.multiSelectEvent.emit();
    };

    private _onClear = (event: any) => {
        if (this.active) {
            this.clearEvent.emit();
            event.stopPropagation();
        }
    };

    private _renderFilterOptions() {
        return (
            <glyph-filter-options
                basePath={this.basePath}
                locale={this.locale}
                description={this.description}
                options={[ ...this.options ]}
                haveMultiSelect={this.haveMultiSelect}
                multiSelect={this.multiSelect}
                searchPlaceholder={this.searchPlaceholder}
                i18n={this.i18n}
                interface={this.interface}
                optionClickEvent={this._optionClick}
                multiSelectEvent={this._multiSelectClick}
                closeEvent={this._closeFilter}
            />
        );
    }

    render() {
        const active = this.active;

        return (
            <Host>
                <Flex
                    row
                    middle
                    class={cls(
                        'filter-chip',
                        {
                            active,
                            expanded: this.expanded,
                        },
                        this.interface,
                    )}
                    onClick={this._expandFilter}
                >
                    <span>{this.chipDescription}</span>
                    <Icon
                        onClick={active ? this._onClear : null}
                        icon={
                            active
                                ? 'close'
                                : this.interface === UIInterface.classic
                                    ? 'arrow_drop_down'
                                    : 'expand_more'
                        }
                    />
                </Flex>
                {this.expanded && this._renderFilterOptions()}
            </Host>
        );
    }
}
