import { Component, Event, EventEmitter, Prop, h } from '@stencil/core';
import { Tab, TabStyle } from 'glyph-core-poc';
import { Flex } from '../../utils/layout';
import { cls } from '../../utils/utils';

@Component({
    tag: 'glyph-tabs',
    styleUrl: 'tabs.scss',
    shadow: true,
})
export class TabsComponent {
    /** Component tabs */
    @Prop({ mutable: true }) tabs: Tab[];
    /** Tab rendering style big | small */
    @Prop() tabStyle: TabStyle = TabStyle.small;

    /** Tab selection event */
    @Event() tabSelect: EventEmitter<Tab>;

    private _selectTab = (selectedTab: Tab, index: number) => () => {
        this.tabs = this.tabs.map((tab, idx) => ({ ...tab, active: idx === index }));
        this.tabSelect.emit(selectedTab);
    };

    render() {
        return (
            <Flex row middle class="tabs__container">
                {this.tabs.map((tab: Tab, index: number) => (
                    <span
                        class={cls('tab', { active: tab.active }, this.tabStyle)}
                        onClick={this._selectTab(tab, index)}
                    >
                        {tab.description}
                    </span>
                ))}
            </Flex>
        );
    }
}
