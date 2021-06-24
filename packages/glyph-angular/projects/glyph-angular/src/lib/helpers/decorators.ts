export const WithGlobalDecorator = ({ template, props, ctx, style = '' }) => {
    const {
        globals: { locale, theme, fontSize },
    } = ctx;
    const bodyElement = document.getElementsByTagName('body')[0];
    bodyElement.className = theme;

    if (fontSize !== 'base') {
        style = `${style}; --gui-font--base: ${fontSize}`;
    }

    template = `<div lang="${locale}" style="${style}">${template}</div>`;

    return {
        props,
        template,
    };
};
