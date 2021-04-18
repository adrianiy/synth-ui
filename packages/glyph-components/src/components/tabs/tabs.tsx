import { Component, Event, EventEmitter, Prop, h } from '@stencil/core';
import { Tab, TabStyle } from 'glyph-core';
import { Flex } from '../../utils/layout';
import { cls } from '../../utils/utils';

@Component({
    tag: 'glyph-tabs',
    styleUrl: 'tabs.scss',
    shadow: true,
})
export class TabsComponent {
    /** Component tabs */
    @Prop() tabs: Tab[];
    /** Tab rendering style big | small */
    @Prop() tabStyle: TabStyle = TabStyle.small;

    /** Tab selection event */
    @Event() tabSelect: EventEmitter<Tab>;

    private _selectTab = Tab => () => {
        this.tabSelect.emit(Tab);
    };

    render() {
        return (
            <Flex row middle className="tabs__container">
                {this.tabs.map((tab: Tab) => (
                    <span class={cls('tab', tab.active && 'active', this.tabStyle)} onClick={this._selectTab(tab)}>
                        {tab.description}
                    </span>
                ))}
            </Flex>
        );
    }
}
