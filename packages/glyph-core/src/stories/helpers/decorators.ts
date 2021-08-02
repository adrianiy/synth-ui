export const WithGlobalTheme = (_, context) => {
    const { theme } = context.globals;
    const bodyElementFirst = document.getElementsByTagName('body')[0];
    const bodyElement = parent.document.getElementsByTagName('body')[0];
    bodyElementFirst.className = theme;
    bodyElement.className = theme;

    return ' ';
};
