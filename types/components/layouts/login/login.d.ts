export declare class LoginComponent {
  /** Base path to get assets */
  basePath: string;
  /** Component interface *modern* | *classic* */
  interface: string;
  /** Application version */
  version: string;
  /** Login callback */
  login: (userData: {
    user: string;
    password: string;
  }) => void;
  /** On login success */
  loginSuccess: (result: any) => void;
  /** Extra i18n translates */
  i18n: {
    [key: string]: string;
  };
  /** **optional** force locale change if html lang is not interpreted */
  locale: string;
  /** Element reference */
  element: HTMLGlyphLoginElement;
  /** Login error flag */
  loginError: boolean;
  /** Loading flag */
  loading: boolean;
  /** User name */
  username: string;
  /** User name error */
  usernameError: boolean;
  /** User password */
  password: string;
  /** User password error */
  passwordError: boolean;
  private _i18n;
  componentWillLoad(): void;
  private _initializeVariables;
  private _handleUserInput;
  private _handlePassInput;
  private _checkInputs;
  private _doLogin;
  render(): any;
}
