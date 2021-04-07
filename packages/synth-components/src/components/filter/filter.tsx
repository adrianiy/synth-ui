import { Component, Prop, h, State, Host, Element, Event, EventEmitter } from '@stencil/core';
import { ColumnLayout, distributions, RowLayout } from '../../utils/layout';
import { getLocaleComponentStrings } from '../../utils/utils';
import { FilterOption, FilterOptionHeader, SelectedFilter } from 'synth-core';
import { ClickOutside } from 'stencil-click-outside';

@Component({
    tag: 'synth-filter',
    styleUrl: 'filter.scss',
    shadow: true,
})
export class FilterComponent {
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
    /** Filter selected */
    @Prop() selected: SelectedFilter[];
    /** Search placeholder */
    @Prop() searchPlaceholder: string;
    /** Extra i18n translation object */
    @Prop() i18n: { [key: string]: string } = {};
    /** Option click event */
    @Event() optionClickEvent: EventEmitter<any>;
    /** Clear selected filters callback */
    @Event() clearEvent: EventEmitter<any>;
    /** Multiselect toggler callback */
    @Event() multiSelectEvent: EventEmitter<any>;
    /** Element reference */
    @Element() element: HTMLSynthFilterElement;
    /** Chip description */
    @State() chipDescription: string;
    /** Filter expanded flag */
    @State() expanded: boolean = false;
    /** Filter search value */
    @State() searchValue: string;

    private _i18n: any;

    @ClickOutside()
    clickOutsideHandler() {
        if (this.expanded) {
            this._expandFilter();
        }
    }

    async componentWillLoad() {
        await this._initializeVariables();
    }

    componentWillRender() {
        this._changeDescription();
    }

    private _expandFilter = () => {
        this.expanded = !this.expanded;
    };

    private _optionClick = option => () => {
        this.optionClickEvent.emit(option);

        if (!this.multiSelect && !option.header) {
            this._expandFilter();
        }
    };

    private _multiSelectClick = () => {
        this.multiSelectEvent.emit();
    };

    private _onClear = event => {
        if (this.selected.length) {
            this.clearEvent.emit();
            event.stopPropagation();
        }
    };

    private _changeDescription() {
        if (this.selected.length > 0) {
            this.chipDescription =
                this.selected.length > 1 ? `${this.selected.length} ${this.plural}` : this.selected[0].description;
        } else {
            this.chipDescription = this.description;
        }
    }

    private async _initializeVariables() {
        const componentI18n = await getLocaleComponentStrings([ 'filter' ], this.element);
        this._i18n = { ...componentI18n, ...this.i18n };
    }

    private _inSearch({ description, children }: { description: string; children?: FilterOption[] }) {
        if (this.searchValue) {
            if (children) {
                return children.some(child => this._inSearch(child));
            }
            return description.toLowerCase().includes(this.searchValue.toLowerCase());
        }

        return true;
    }

    private _handleInputChange = event => {
        this.searchValue = event.target.value;
    };

    private _handleKeyUp = event => {
        const isEnter = event.key === 'Enter';
        if (isEnter) {
            const visibleOptions = this.options.filter(option => option.display && this._inSearch(option));

            if (visibleOptions.length === 1) {
                this._optionClick(visibleOptions[0])();
            }
        }
    };

    private _renderSearch = () => {
        return (
            <div class="search-box">
                <input
                    type="text"
                    placeholder={this.searchPlaceholder}
                    value={this.searchValue}
                    onKeyUp={this._handleKeyUp}
                    onInput={this._handleInputChange}
                />
            </div>
        );
    };

    private _renderMultiSelect = () => {
        return (
            <RowLayout className="operation" distribution={[ distributions.SPACED, distributions.MIDDLE ]}>
                <span>{this._i18n['multiselect']}</span>
                <synth-toggler active={this.multiSelect} callback={this._multiSelectClick} />
            </RowLayout>
        );
    };

    private _renderOptionDescription = (description: string) => {
        if (this.searchValue) {
            description = description.split(this.searchValue).join(`<b>${this.searchValue}</b>`);
        }

        return <span innerHTML={description} />;
    };

    private _renderOptionHeader = (option: FilterOptionHeader) => {
        const childInDescription = option.children.some(child => this._inSearch(child));
        const expanded = option.expanded || (this.searchValue && childInDescription);

        return (
            <ColumnLayout className="children__container">
                <span>
                    {expanded ? '- ' : '+ '}
                    {this._renderOptionDescription(option.description)}
                </span>
                {expanded && this._renderOptionsList(option.children)}
            </ColumnLayout>
        );
    };

    private _renderOptionsList = options => {
        return (
            <ul>
                {options
                    .filter(option => option.display && this._inSearch(option))
                    .map(option => (
                        <li>
                            <RowLayout
                                onClick={this._optionClick(option)}
                                className={`option ${option.active && 'active'}`}
                                distribution={[ distributions.SPACED ]}
                            >
                                {option.header
                                    ? this._renderOptionHeader(option)
                                    : this._renderOptionDescription(option.description)}
                                {option.active && <em class="material-icons">checkmark</em>}
                            </RowLayout>
                        </li>
                    ))}
            </ul>
        );
    };

    private _renderFilterOptions = () => {
        return (
            <ColumnLayout className="filter-options__container">
                <h5>{this.description}</h5>
                {this.searchPlaceholder && this._renderSearch()}
                {this.haveMultiSelect && this._renderMultiSelect()}
                {this._renderOptionsList(this.options)}
            </ColumnLayout>
        );
    };

    render() {
        return (
            <Host>
                <RowLayout
                    distribution={[ distributions.MIDDLE ]}
                    className={`filter-chip ${!!this.selected.length && 'active'} ${this.expanded && 'expanded'}`}
                    onClick={this._expandFilter}
                >
                    <span>{this.chipDescription}</span>
                    <em class="material-icons" onClick={this._onClear}>
                        {this.selected.length ? 'close' : 'arrow_drop_down'}
                    </em>
                </RowLayout>
                {this.expanded && this._renderFilterOptions()}
            </Host>
        );
    }
}
