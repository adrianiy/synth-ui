import { Component, Element, Prop, State, h, Listen } from '@stencil/core';
import { CalendarEvent, CalendarGroup, SelectorOption, Tab, TimelineEvent, UIInterface } from 'glyph-core';
import { Flex } from '../../utils/layout';
import { getLocaleComponentStrings } from '../../utils/utils';

@Component({
    tag: 'glyph-timeline',
    styleUrl: 'timeline.scss',
    shadow: true,
})
export class TimelineComponent {
    /** Base path to get assets dir */
    @Prop() basePath: string = '';
    /** Calendar events */
    @Prop() calendarEvents: TimelineEvent[];
    /** Events */
    @Prop() events: TimelineEvent[];
    /** Extra i18n translation object */
    @Prop() i18n: { [key: string]: string } = {};
    /** **optional** force locale change if html lang is not interpreted */
    @Prop() locale: string;
    /** Interface type ['MODERN', 'CLASSIC'] */
    @Prop() interface: UIInterface = UIInterface.classic;
    /** Event triggered when user clicks outside component container */
    @Prop() outsideCallback: () => void;
    /** Element reference */
    @Element() element: HTMLGlyphTimelineElement;

    /** Timeline options */
    @State() options: SelectorOption[] = [
        { name: 'calendar', active: true, value: 'calendar' },
        { name: 'events', active: false, value: 'events' },
    ];
    /** Timeline tabs */
    @State() tabs: Tab[] = [
        { description: `${new Date().getFullYear()}`, active: true },
        { description: `${new Date().getFullYear() - 1}`, active: false },
    ];
    /** Selected timeline */
    @State() selectedTimeline: string;
    /** Selected tab */
    @State() selectedTab: string;

    private _i18n: { [key: string]: string } = {};

    @Listen('click', { target: 'window' })
    clickOutside(event: any) {
        if (!event.path.some((el: HTMLElement) => el.closest?.('.timeline__container'))) {
            this.outsideCallback();
        }
    }

    componentWillLoad() {
        this._initializeVariables();
    }

    componentWillRender() {
        this.selectedTab = this.tabs.find(tab => tab.active).description;
        this.selectedTimeline = this.options.find(option => option.active).name;
    }

    private async _initializeVariables() {
        const componentI18n = await getLocaleComponentStrings([ 'timeline' ], this.element, this.basePath, this.locale);
        this._i18n = { ...componentI18n, ...this.i18n };
        this.options.forEach(option => (option.name = this._i18n[option.name]));
    }

    private _handleSelect = (event: CustomEvent<SelectorOption>) => {
        this.options = this.options.map(option => ({ ...option, active: option.value === event.detail.value }));
    };

    private _handleTab = (event: CustomEvent<Tab>) => {
        this.tabs = this.tabs.map(tab => ({ ...tab, active: tab.description === event.detail.description }));
    };

    private _renderEvents = () => {
        const events = this.selectedTimeline === 'calendar' ? this.calendarEvents : this.events;

        return events[this.selectedTab].map((group: CalendarGroup) => (
            <Flex>
                <span class="caption date">{group.date}</span>
                <Flex class="event__container">
                    {group.events.map((event: CalendarEvent) => (
                        <Flex row class="event__wrapper">
                            <Flex center class="event__wrapper__decoration">
                                <div class="line" />
                                <div class="circle" />
                                <div class="line" />
                            </Flex>
                            <Flex>
                                <h4>{event.localizedStartTime}</h4>
                                <h4>{event.title}</h4>
                                <span class="caption">{event.description}</span>
                            </Flex>
                        </Flex>
                    ))}
                </Flex>
            </Flex>
        ));
    };

    render() {
        return (
            <Flex class="timeline__container">
                <glyph-title titleText="Timeline" />
                <Flex row spaced middle class="timeline__options">
                    <glyph-selector
                        options={this.options}
                        interface={this.interface}
                        onOptionSelect={this._handleSelect}
                    />
                    <glyph-tabs tabs={this.tabs} onTabSelect={this._handleTab} />
                </Flex>
                <Flex>{this._renderEvents()}</Flex>
            </Flex>
        );
    }
}
