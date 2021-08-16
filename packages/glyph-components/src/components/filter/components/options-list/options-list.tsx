import { Component, h, Prop } from '@stencil/core';
import { FilterOptionHeader, UIInterface } from 'glyph-core-poc';
import { Icon } from '../../../../utils/icons';
import { Flex } from '../../../../utils/layout';
import { cls } from '../../../../utils/utils';
import { inSearch, renderOptionDescription } from '../../utils/utils';

@Component({
    tag: 'glyph-filter-options-list',
    styleUrl: 'options-list.scss',
    shadow: true,
})
export class OptionsListComponent {
    /** Filter options */
    @Prop() options: FilterOptionHeader[];
    /** Filter chip interface ['MODERN', 'CLASSIC'] */
    @Prop() interface: string = UIInterface.classic;
    /** Style applied in list */
    @Prop() listStyle: { [key: string]: string };
    /** Extra i18n translation object */
    @Prop() i18n: { [key: string]: string } = {};
    /** Search value */
    @Prop() searchValue: string;
    /** Option click event */
    @Prop() optionClick: (option: FilterOptionHeader) => (event: any) => void;

    private _checkHide(option: FilterOptionHeader) {
        const { parents } = option;
        const hideKeys = Object.keys(parents || {})
            .map(key => `${key}Hide`)
            .concat('hide');

        return !hideKeys.some(key => option[key]);
    }

    private _renderOptionHeader = (option: FilterOptionHeader, filterQuantity: number) => {
        const childInSearch = option.children.some(child => inSearch(child, this.searchValue, this.i18n));
        const expanded = option.expanded || (this.searchValue && childInSearch) || filterQuantity === 1;

        return (
            childInSearch && (
                <glyph-filter-drilldown-options
                    option={option}
                    interface={this.interface}
                    searchValue={this.searchValue}
                    optionClick={this.optionClick}
                    i18n={this.i18n}
                    expanded={expanded}
                />
            )
        );
    };

    private _renderOption = (option: FilterOptionHeader) => {
        return (
            <Flex row spaced onClick={this.optionClick(option)} class={cls('option', { active: option.active })}>
                {renderOptionDescription(this.i18n[option.description] || option.description, this.searchValue)}
                {option.active && <Icon icon="checkmark" />}
            </Flex>
        );
    };

    render() {
        const renderableOptions = this.options
            .filter(
                option =>
                    option.display &&
                    !option.hideFilter &&
                    inSearch(option, this.searchValue, this.i18n) &&
                    this._checkHide(option),
            )
            .sort((a, b) => a.position - b.position);

        return (
            <ul style={this.listStyle} class={this.interface}>
                {renderableOptions.map(option => (
                    <li>
                        {option.header
                            ? this._renderOptionHeader(option, renderableOptions.length)
                            : this._renderOption(option)}
                    </li>
                ))}
            </ul>
        );
    }
}
