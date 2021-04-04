import { Component, Prop, h, State, Host, Element } from '@stencil/core';
import { ColumnLayout, distributions, RowLayout } from '../../utils/layout';
import { getLocaleComponentStrings } from '../../utils/utils';
import { FilterOptionHeader, SelectedFilter } from 'synth-core';

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
    /** Multiselect flag */
    @Prop() multiSelect: boolean = false;
    /** Filter selected */
    @Prop() selected: SelectedFilter[];
    /** Extra i18n translation object */
    @Prop() i18n: { [key: string]: string } = {};
    /** Element reference */
    @Element() element: HTMLSynthFilterElement;
    /** Chip description */
    @State() chipDescription: string;
    /** Filter expanded flag */
    @State() expanded: boolean = false;

    private _i18n: any;

    async componenetWillLoad() {
        await this._initializeVariables();
    }

    componentWillRender() {
        this._changeDescription();
    }

    private _expandFilter = () => () => {
        this.expanded = !this.expanded;
    };

    private _changeDescription() {
        this.chipDescription = this.selected.length > 1 ? this.plural : this.description;
    }

    private async _initializeVariables() {
        const componentI18n = await getLocaleComponentStrings(['filter'], this.element);
        this._i18n = { ...componentI18n, ...this.i18n };
    }

    private _renderMultiSelect = () => {
        return <RowLayout>{this._i18n['multiselect']}</RowLayout>;
    };

    private _renderFilterOptions = () => {
        return (
            <ColumnLayout className="filter-options__container">
                <h5>{this.description}</h5>
                {this.multiSelect && this._renderMultiSelect()}
                {this.options
                    .filter(option => option.display)
                    .map(option => (
                        <RowLayout className="option" distribution={[distributions.SPACED]}>
                            <span>{option.description}</span>
                            {option.active && <em class="material-icons">checkmark</em>}
                        </RowLayout>
                    ))}
            </ColumnLayout>
        );
    };

    render() {
        return (
            <Host>
                <RowLayout
                    distribution={[distributions.MIDDLE]}
                    className={`filter-chip ${!!this.selected.length && 'active'} ${this.expanded && 'expanded'}`}
                    onClick={this._expandFilter()}
                >
                    {this.chipDescription}
                    <em class="material-icons">{this.selected.length ? 'close' : 'arrow_drop_down'}</em>
                </RowLayout>
                {this.expanded && this._renderFilterOptions()}
            </Host>
        );
    }
}
