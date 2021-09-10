import { ToasterTypes } from 'glyph-core-poc';
export declare class ToasterComponent {
  /** Base path to get assets */
  basePath: string;
  /** Id of event that trigger toaster show */
  eventId: string;
  /** Time to live for shown toaster */
  ttl: number;
  /** Extra i18n translation object */
  i18n: {
    [key: string]: string;
  };
  /** **optional** force locale change if html lang is not interpreted */
  locale: string;
  /** Element reference */
  element: HTMLGlyphToasterElement;
  /** Toaster text */
  text: string;
  /** Toaster icon */
  icon: string;
  /** Toaster type */
  ttype: ToasterTypes;
  /** Toaster visibility */
  visible: boolean;
  /** Current ttl countdown */
  currentTtl: number;
  private _countdown;
  private _i18n;
  componentWillLoad(): void;
  disconnectedCallback(): void;
  private _toggleVisibility;
  private _initializeVariables;
  private _handleToasterTrigger;
  render(): any;
}
