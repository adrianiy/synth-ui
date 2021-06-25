import { h, Component, Prop, State, Event, EventEmitter } from '@stencil/core';
import {
    FiltersConfig,
    SortableOption,
    SortableIcon,
    SortableChildrenEvent,
    FilterOption,
    UIInterface,
    FilterOptionHeader,
} from 'glyph-core';
import { SortableOptions } from 'sortablejs';
import { Flex } from '../../../../utils/layout';

@Component({
    tag: 'glyph-config-modal',
    styleUrl: './config-modal.scss',
    shadow: true,
})
export class ConfigModalComponent {
    /** Filters configuration */
    @Prop() filtersConfig: FiltersConfig;
    /** Extra i18n translation object */
    @Prop() i18n: { [key: string]: string } = {};
    /** Hide zara south filters active */
    @Prop() hideZaraSouth: boolean;
    /** Interface type [ 'MODERN', 'CLASSIC' ] */
    @Prop() interface: UIInterface = UIInterface.classic;
    /** Filter configuration change event */
    @Event() configChange: EventEmitter<FiltersConfig>;

    /** Hidden filters */
    @State() hiddenFilters: string[];
    /** Visible filters */
    @State() visibleFilters: string[];
    /** Filter under edition */
    @State() editableFilter: string;
    /** State of zara south filters hidden */
    @State() zaraSouthHidden: boolean;

    componentWillLoad() {
        const savedZaraSouth = localStorage.getItem('glyph.hideSouthFilters');
        this.zaraSouthHidden = savedZaraSouth === 'true';
        Object.keys(this.filtersConfig).forEach((key: string) => {
            const filter = this.filtersConfig[key];

            filter.options = filter.options
                ?.map(option => ({ ...option, children: option.children?.sort((a, b) => a.position - b.position) }))
                ?.sort((a, b) => a.position - b.position);
        });
        this.hiddenFilters = Object.keys(this.filtersConfig)
            .filter(key => !this.filtersConfig[key].visible)
            .sort((a, b) => this.filtersConfig[a].position - this.filtersConfig[b].position);
        this.visibleFilters = Object.keys(this.filtersConfig)
            .filter(key => this.filtersConfig[key].visible)
            .sort((a, b) => this.filtersConfig[a].position - this.filtersConfig[b].position);
    }

    private _closeEditableFilter = () => {
        this.editableFilter = undefined;
    };

    private _toggleZaraSouth = () => {
        this.zaraSouthHidden = !this.zaraSouthHidden;
        Object.keys(this.filtersConfig).forEach((key: string) => {
            const filter = this.filtersConfig[key];

            filter.options = filter.options?.map(this._checkZaraSouthHide);
        });
        localStorage.setItem('glyph.hideSouthFilters', `${this.zaraSouthHidden}`);
    };

    private _checkZaraSouthHide = (option: FilterOptionHeader) => {
        const haveZaraSouth = option.brand?.includes(16);
        const children = option.children?.map(this._checkZaraSouthHide);

        return { ...option, children, hideFilter: haveZaraSouth && this.zaraSouthHidden };
    };

    private _getCode = (option: FilterOptionHeader) => {
        return [ option.code, option.description ].flat().join('-');
    };

    private _handleSortChange = ({ detail: sortedList }: CustomEvent<string[]>) => {
        sortedList.forEach((key, position) => {
            if (key) {
                this.filtersConfig[key].position = position;
            }
        });

        this.configChange.emit(this.filtersConfig);
    };

    private _handleOptionSortChange = ({ detail: sortedList }: CustomEvent<string[]>) => {
        const filter = this.filtersConfig[this.editableFilter];
        sortedList.forEach((key, position) => {
            const option = filter.options.find(option => this._getCode(option) === key);
            option.position = position;
        });

        this.filtersConfig = { ...this.filtersConfig, [this.editableFilter]: filter };
        this.configChange.emit(this.filtersConfig);
    };

    private _handleChildrenSortChange = ({ detail: { sortedList, item } }: CustomEvent<SortableChildrenEvent>) => {
        const filter = this.filtersConfig[this.editableFilter];
        const optionIndex = filter.options.findIndex(option => this._getCode(option) === item.id);
        sortedList.forEach((key, position) => {
            const option = filter.options[optionIndex].children.find(child => this._getCode(child) === key);
            option.position = position;
        });

        this.filtersConfig = { ...this.filtersConfig, [this.editableFilter]: filter };
        this.configChange.emit(this.filtersConfig);
    };

    private _handleAdd = (from: string) => ({ detail: sortedList }: CustomEvent<string[]>) => {
        const visible = from === 'visible';
        sortedList.forEach((id, position) => {
            this.filtersConfig[id] = { ...this.filtersConfig[id], position, visible };
        });
        this.configChange.emit(this.filtersConfig);
    };

    private _handleEdit = (key: string) => () => {
        this.editableFilter = key;
    };

    private _handleOptionVisibility = (item: SortableOption) => {
        const filter = this.filtersConfig[this.editableFilter];
        const index = filter.options.findIndex(
            ({ code, description }) => [ code, description ].flat().join('-') === item.id,
        );
        const display = !filter.options[index].display;

        filter.options[index].display = display;
        this.configChange.emit({ ...this.filtersConfig, [this.editableFilter]: filter });
    };

    private _handleChildrenVisibility = (parentId: string) => (item: SortableOption) => {
        const filter = this.filtersConfig[this.editableFilter];
        const optionIndex = filter.options.findIndex(
            ({ code, description }) => [ code, description ].flat().join('-') === parentId,
        );
        const childrenIndex = filter.options[optionIndex].children.findIndex(
            ({ code, description }) => [ code, description ].flat().join('-') === item.id,
        );
        const display = !filter.options[optionIndex].children[childrenIndex].display;

        filter.options[optionIndex].children[childrenIndex].display = display;
        this.configChange.emit({ ...this.filtersConfig, [this.editableFilter]: filter });
    };

    private _renderSortableList = (from: string, filters: string[], action?: boolean) => {
        const sortableOptions = filters.map((key: string) => ({
            name: this.filtersConfig[key].description,
            id: key,
            icon: SortableIcon.always,
            action: action && key !== 'date' ? { icon: 'edit', action: this._handleEdit(key) } : null,
        }));
        const config: SortableOptions = {
            group: 'config-modal',
            sort: true,
        };

        return (
            <Flex column left class="configuration-modal__list">
                <h5>{this.i18n[`modal.${from}`]}</h5>
                <glyph-sortable
                    height={200}
                    config={config}
                    list={sortableOptions}
                    onSortChange={this._handleSortChange}
                    onAdd={this._handleAdd(from)}
                />
            </Flex>
        );
    };

    private _renderSortableOptions = () => {
        const filter = this.filtersConfig[this.editableFilter];
        const config: SortableOptions = {
            group: 'config-modal--options',
            sort: true,
        };
        const sortableOptions = filter.options.map(option => {
            const { description: name, display, hideFilter, children } = option;
            const id = this._getCode(option);
            const visible = display && !hideFilter;
            let childrenOptions: SortableOption[];

            if (children) {
                childrenOptions = children.map((child: FilterOption) => ({
                    name: child.description,
                    id: this._getCode(child),
                    icon: SortableIcon.always,
                    style: {
                        'opacity': child.display && !child.hideFilter && visible ? 1 : 0.5,
                        'padding-left': 'var(--gui-padding--l)',
                    },
                    action: {
                        icon: `visibility${child.display && !child.hideFilter ? '' : '_off'}`,
                        action: this._handleChildrenVisibility(id),
                    },
                }));
            }

            return {
                id,
                name,
                icon: SortableIcon.always,
                children: childrenOptions,
                style: { opacity: visible ? 1 : 0.5 },
                action: {
                    icon: `visibility${display && !hideFilter ? '' : '_off'}`,
                    action: this._handleOptionVisibility,
                },
            };
        });

        return (
            <Flex column left class="configuration-modal__list--options">
                <Flex spaced row top class="configuration-modal__list--options__header">
                    <h5>{filter.description}</h5>
                    <em class="material-icons" onClick={this._closeEditableFilter}>
                        close
                    </em>
                </Flex>
                <glyph-sortable
                    height={200}
                    config={config}
                    list={sortableOptions}
                    onSortChange={this._handleOptionSortChange}
                    onChildrenSortChange={this._handleChildrenSortChange}
                />
            </Flex>
        );
    };

    private _renderZaraSouthToggler = () => {
        return (
            <Flex row right middle class="toggler__container">
                <span>{this.i18n['modal.hideSouthFilters']}</span>
                <glyph-toggler
                    active={this.zaraSouthHidden}
                    interface={this.interface}
                    onClick={this._toggleZaraSouth}
                />
            </Flex>
        );
    };

    render() {
        return (
            <Flex column class="configuration-modal__container">
                <span>{this.i18n['modal.description']}</span>
                <div class="configuration-modal__lists">
                    {this._renderSortableList('hidden', this.hiddenFilters)}
                    {this._renderSortableList('visible', this.visibleFilters, true)}
                    {this.editableFilter && this._renderSortableOptions()}
                </div>
                {this.hideZaraSouth && this._renderZaraSouthToggler()}
            </Flex>
        );
    }
}
