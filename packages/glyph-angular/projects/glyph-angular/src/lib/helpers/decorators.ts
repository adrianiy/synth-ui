export const WithGlobalDecorator = ({ template, props, ctx, style = '' }) => {
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

    template = `<div lang="${locale}" style="${style}">${template}</div>`;

    return {
        props,
        template,
    };
};
