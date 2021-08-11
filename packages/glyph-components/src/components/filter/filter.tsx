import { Component, Prop, h, State, Element, Event, EventEmitter, Listen, Method } from '@stencil/core';
import { Flex } from '../../utils/layout';
import { UIInterface, FilterOptionHeader, FilterSelectEvent } from 'glyph-core-poc';
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
    @Prop({ mutable: true }) multiSelect: boolean = false;
    /** Search placeholder */
    @Prop() searchPlaceholder: string;
    /** Extra i18n translation object */
    @Prop() i18n: { [key: string]: string } = {};
    /** **optional** force locale change if html lang is not interpreted */
    @Prop() locale: string;
    /** Filter chip interface ['MODERN', 'CLASSIC'] */
    @Prop() interface: UIInterface = UIInterface.classic;
    /** Option click event */
    @Event() optionClick: EventEmitter<FilterSelectEvent>;
    /** Clear selected filters callback */
    @Event() clear: EventEmitter<any>;
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
        this._getChipDescription();
    }

    /* eslint-disable @stencil/decorators-style, @stencil/async-methods  */
    /** This method will return image height */
    @Method()
    async clearFilter() {
        this._onClear();
    }

    private _getChipDescription = () => {
        const applied = this._getActiveOptions();
        const total = applied.length;
        const isPlural = total > 1;

        if (total) {
            this.active = true;
            this.chipDescription = isPlural
                ? `${total} ${this.i18n[this.plural] || this.plural}`
                : this.i18n[applied[0].description] || applied[0].description;
        } else {
            this.active = false;
            this.chipDescription = this.i18n[this.description] || this.description;
        }
    };

    private _expandFilter = () => {
        this.expanded = !this.expanded;
    };

    private _closeFilter = () => {
        this.expanded = false;
    };

    private _optionClick = (option: FilterOptionHeader) => {
        if (!this.multiSelect) {
            this._clear();
        }
        option.active = !option.active;

        this.optionClick.emit({ option });

        this._getChipDescription();

        if (!this.multiSelect && !option.header) {
            this._expandFilter();
        }
    };

    private _multiSelectClick = () => {
        this.multiSelect = !this.multiSelect;
        if (!this.multiSelect && this._getActiveOptions().length > 1) {
            this._clear();
        }
        this.multiSelectEvent.emit();
    };

    private _onClear = (event?: any) => {
        this._clear();
        this._getChipDescription();
        this.clear.emit();
        event?.stopPropagation();
    };

    private _getActiveOptions = () => {
        const appliedChildren = this.options.map(opt => opt.children?.filter(({ active }) => active)).flat();
        const appliedOptions = this.options.filter(({ active }) => active);
        const applied = appliedChildren.concat(appliedOptions).filter(Boolean);

        return applied;
    };

    private _clear = () => {
        this.options.forEach(option => {
            option.active = false;

            if (option.header || option.children) {
                option.children.forEach(child => {
                    child.active = false;
                });
            }
        });
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
            <Flex class={this.interface}>
                <Flex
                    row
                    middle
                    class={cls('filter-chip', this.interface, {
                        active,
                        expanded: this.expanded,
                    })}
                    onClick={this._expandFilter}
                >
                    <span
                        class={cls('label--l', {
                            'label--l--medium': this.interface === UIInterface.redesign,
                        })}
                    >
                        {this.chipDescription}
                    </span>
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
            </Flex>
        );
    }
}
