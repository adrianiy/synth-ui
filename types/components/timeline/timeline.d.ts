import { SelectorOption, Tab, TimelineEvent } from 'glyph-core-poc';
export declare class TimelineComponent {
  /** Base path to get assets dir */
  basePath: string;
  /** Calendar events */
  calendarEvents: TimelineEvent[];
  /** Events */
  events: TimelineEvent[];
  /** Extra i18n translation object */
  i18n: {
    [key: string]: string;
  };
  /** **optional** force locale change if html lang is not interpreted */
  locale: string;
  /** Interface type ['MODERN', 'CLASSIC'] */
  interface: string;
  /** Event triggered when user clicks outside component container */
  outsideCallback: () => void;
  /** Element reference */
  element: HTMLGlyphTimelineElement;
  /** Timeline options */
  options: SelectorOption[];
  /** Timeline tabs */
  tabs: Tab[];
  /** Selected timeline */
  selectedTimeline: string;
  /** Selected tab */
  selectedTab: string;
  private _i18n;
  clickOutside(event: any): void;
  componentWillLoad(): void;
  componentWillRender(): void;
  private _initializeVariables;
  private _handleSelect;
  private _handleTab;
  private _renderEvents;
  render(): any;
}
