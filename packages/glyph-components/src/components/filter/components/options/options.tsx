import { Component, Element, Prop, State, h, Listen } from '@stencil/core';
import { UIInterface, FilterOptionHeader } from 'glyph-core';
import { Icon } from '../../../../utils/icons';
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
    @Prop({ mutable: true }) options: FilterOptionHeader[];
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

    private _optionClick = (option: FilterOptionHeader, index?: number) => () => {
        if (option.header && index != undefined) {
            this.options = Object.values({
                ...this.options,
                [index]: { ...option, expanded: !option.expanded },
            }) as FilterOptionHeader[];
        } else {
            console.log(option);
            this.optionClickEvent(option);
        }
    };

    private _multiSelectClick = () => {
        this.multiSelectEvent();
    };

    private async _initializeVariables() {
        const componentI18n = await getLocaleComponentStrings(['filter'], this.element);
        this._i18n = { ...componentI18n, ...this.i18n };
    }

    private _inSearch(option: FilterOptionHeader) {
        if (this.searchValue) {
            if (option.header) {
                return option.children.some(child => this._inSearch(child));
            }
            return option.description.toLowerCase().includes(this.searchValue.toLowerCase());
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
                    <Icon icon="done_all" />
                )}
                <glyph-toggler active={this.multiSelect} onClick={this._multiSelectClick} interface={this.interface} />
            </Flex>
        );
    };

    private _renderOptionDescription = (description: string) => {
        if (this.searchValue) {
            description = description
                .toLowerCase()
                .split(this.searchValue.toLowerCase())
                .join(`<b>${this.searchValue}</b>`);
        }

        return <span innerHTML={description} />;
    };

    private _renderOptionHeader = (option: FilterOptionHeader) => {
        const childInSearch = option.children.some(child => this._inSearch(child));
        const expanded = option.expanded || (this.searchValue && childInSearch);

        return (
            childInSearch && (
                <Flex className="children__container">
                    <Flex row>
                        <span>{expanded ? '- ' : '+ '}</span>
                        <span>{this._renderOptionDescription(option.description)}</span>
                    </Flex>
                    {expanded && this._renderOptionsList(option.children)}
                </Flex>
            )
        );
    };

    private _renderOptionsList = (options: FilterOptionHeader[]) => {
        return (
            <ul>
                {options
                    .filter(option => option.display && this._inSearch(option))
                    .map((option, index) => (
                        <li>
                            <Flex
                                row
                                spaced
                                onClick={this._optionClick(option, index)}
                                className={cls('option', option.active && 'active')}
                            >
                                {option.header
                                    ? this._renderOptionHeader(option)
                                    : this._renderOptionDescription(option.description)}
                                {option.active && <Icon icon="checkmark" />}
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
