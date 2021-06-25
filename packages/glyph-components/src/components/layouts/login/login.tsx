import { Component, Element, Prop, State, h, getAssetPath } from '@stencil/core';
import { UIInterface } from 'glyph-core';
import { Flex } from '../../../utils/layout';
import { cls, getLocaleComponentStrings } from '../../../utils/utils';

@Component({
    tag: 'glyph-login',
    styleUrl: 'login.scss',
    shadow: true,
})
export class LoginComponent {
    /** Component interface *modern* | *classic* */
    @Prop() interface: UIInterface = UIInterface.modern;
    /** Application version */
    @Prop() version: string;
    /** Login callback */
    @Prop() login: (userData: { user: string; password: string }) => void;
    /** On login success */
    @Prop() loginSuccess: (result: any) => void;
    /** Extra i18n translates */
    @Prop() i18n: { [key: string]: string };
    /** Element reference */
    @Element() element: HTMLGlyphLoginElement;

    /** Login error flag */
    @State() loginError: boolean = false;
    /** Loading flag */
    @State() loading: boolean = false;
    /** User name */
    @State() username: string;
    /** User name error */
    @State() usernameError: boolean;
    /** User password */
    @State() password: string;
    /** User password error */
    @State() passwordError: boolean;

    private _i18n: any;

    async componentWillLoad() {
        await this._initializeVariables();
    }

    private async _initializeVariables() {
        const componentI18n = await getLocaleComponentStrings([ 'login' ], this.element);
        this._i18n = { ...componentI18n, ...this.i18n };
    }

    private _handleUserInput = (event: any) => {
        this.usernameError = false;
        this.username = event.detail;
    };

    private _handlePassInput = (event: any) => {
        this.passwordError = false;
        this.password = event.detail;
    };

    private _checkInputs = () => {
        if (!this.username) {
            this.usernameError = true;
        }
        if (!this.password) {
            this.passwordError = true;
        }

        return !this.usernameError && !this.passwordError;
    };

    private _doLogin = async () => {
        const inputCheck = this._checkInputs();

        if (inputCheck) {
            const body = { user: this.username, password: this.password };
            const method = 'POST';
            try {
                this.loginError = false;
                this.loading = true;
                const result = await (this.login
                    ? this.login(body)
                    : fetch('/login', { method, body: JSON.stringify(body) }));
                this.loginSuccess(result);
            } catch (err) {
                this.loginError = true;
            } finally {
                this.loading = false;
            }
        }
    };

    render() {
        const isClassic = this.interface === UIInterface.classic;

        return (
            <Flex row class="login__container">
                <Flex spaced class={cls('login-user__container', { 'login-user__container--full': isClassic })}>
                    <Flex middle={isClassic} center={isClassic} class="login__form__container">
                        {isClassic && <img class="login__logo" src={getAssetPath('./assets/corporative/logo.png')} />}
                        <h1 class="big" innerHTML={this._i18n['login.welcome']} />
                        <h4>{this._i18n['login.subtitle']}</h4>
                        {this.loginError && <div class="login-error">{this._i18n['login.error']}</div>}
                        <Flex class="login__form">
                            <glyph-input
                                box
                                error={this.usernameError}
                                placeholder={this._i18n['login.user']}
                                onInputChange={this._handleUserInput}
                            />
                            <glyph-input
                                box
                                error={this.passwordError}
                                inputType="password"
                                placeholder={this._i18n['login.pass']}
                                onInputChange={this._handlePassInput}
                            />
                        </Flex>
                        <glyph-button interface={UIInterface.modern} onClick={this._doLogin} text="Login" />
                    </Flex>
                    <Flex row middle spaced class="login__footer">
                        {this.version}
                    </Flex>
                </Flex>
                {!isClassic && <img class="login__splash" src={getAssetPath('./assets/corporative/splash.jpg')} />}
            </Flex>
        );
    }
}
