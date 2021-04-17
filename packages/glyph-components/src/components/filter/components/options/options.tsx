import { Component, Element, Prop, State, h, Listen } from '@stencil/core';
import { UIInterface, FilterOption, FilterOptionHeader } from 'glyph-core';
import { Flex } from '../../../../utils/layout';
import { cls, getLocaleComponentStrings } from '../../../../utils/utils';

@Component({
    tag: 'glyph-filter-options',
    styleUrl: 'options.scss',
    shadow: true,
})
export class FilterOptionsComponent {
    /** Filter description */
    @Prop() description: string;
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
    /** Filter chip interface ['MODERN', 'CLASSIC'] */
    @Prop() interface: UIInterface = UIInterface.classic;
    /** Option click event */
    @Prop() optionClickEvent: (option: FilterOptionHeader) => void;
    /** Multiselect toggler callback */
    @Prop() multiSelectEvent: () => void;
    /** Close callback */
    @Prop() closeEvent: () => void;
    /** Element reference */
    @Element() element: HTMLGlyphFilterOptionsElement;
    /** Filter search value */
    @State() searchValue: string;

    private _i18n: any;

    @Listen('click', { target: 'window' })
    clickOutside(event: any) {
        if (!event.path.some((el: HTMLElement) => el.closest?.('.filter-options__container'))) {
            this.closeEvent();
        }
    }

    async componentWillLoad() {
        await this._initializeVariables();
    }

    private _optionClick = (option: FilterOptionHeader) => () => {
        this.optionClickEvent(option);
    };

    private _multiSelectClick = () => {
        this.multiSelectEvent();
    };

    private async _initializeVariables() {
        const componentI18n = await getLocaleComponentStrings(['filter'], this.element);
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

    private _handleInputChange = (event: any) => {
        this.searchValue = event.target.value;
    };

    private _handleKeyUp = (event: any) => {
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
            <Flex row spaced middle className="operation">
                {this.interface === UIInterface.classic ? (
                    <span>{this._i18n['multiselect']}</span>
                ) : (
                    <em class="material-icons">done_all</em>
                )}
                <glyph-toggler active={this.multiSelect} onClick={this._multiSelectClick} interface={this.interface} />
            </Flex>
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
            <Flex className="children__container">
                <span>
                    {expanded ? '- ' : '+ '}
                    {this._renderOptionDescription(option.description)}
                </span>
                {expanded && this._renderOptionsList(option.children)}
            </Flex>
        );
    };

    private _renderOptionsList = (options: FilterOptionHeader[]) => {
        return (
            <ul>
                {options
                    .filter(option => option.display && this._inSearch(option))
                    .map(option => (
                        <li>
                            <Flex
                                row
                                spaced
                                onClick={this._optionClick(option)}
                                className={cls('option', option.active && 'active')}
                            >
                                {option.header
                                    ? this._renderOptionHeader(option)
                                    : this._renderOptionDescription(option.description)}
                                {option.active && <em class="material-icons">checkmark</em>}
                            </Flex>
                        </li>
                    ))}
            </ul>
        );
    };

    render() {
        return (
            <Flex className={cls('filter-options__container', this.interface)}>
                {this.interface === UIInterface.modern ? (
                    <Flex row spaced>
                        <h3>{this.description}</h3>
                        {this.haveMultiSelect && this._renderMultiSelect()}
                    </Flex>
                ) : (
                    <h5>{this.description}</h5>
                )}
                {this.searchPlaceholder && this._renderSearch()}
                {this.haveMultiSelect && this.interface === UIInterface.classic && this._renderMultiSelect()}
                {this._renderOptionsList(this.options)}
            </Flex>
        );
    }
}
