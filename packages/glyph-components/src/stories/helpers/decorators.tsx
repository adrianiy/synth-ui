import { html } from 'lit-html';

export const WithGlobalDecorator = ({ template, ctx, style = '' }) => {
    const {
        globals: { locale, theme, fontSize },
    } = ctx;

    const bodyElementFirst = document.getElementsByTagName('body')[0];
    const bodyElement = parent.document.getElementsByTagName('body')[0];
    bodyElementFirst.className = theme;
    bodyElement.className = theme;

    if (fontSize !== 'base') {
        style = `${style}; --gui-font--base: ${fontSize}`;
    }

    return html`<div lang="${locale}" style="${style}">${template}</div>`;
};
