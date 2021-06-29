export const globalTypes = {
    theme: {
        name: 'Theme',
        description: 'Global theme for components',
        defaultValue: 'light',
        toolbar: {
            icon: 'edit',
            title: 'Theme',
            right: 'Theme',
            // Array of plain string values or MenuItem shape (see below)
            items: [ 'light', 'dark' ],
        },
    },
    locale: {
        name: 'Locale',
        description: 'Internationalization locale',
        defaultValue: 'en',
        toolbar: {
            icon: 'globe',
            title: 'Lang',
            items: [
                { value: 'en', right: '🇺🇸', title: 'English' },
                { value: 'es', right: '🇪🇸', title: 'Español' },
            ],
        },
    },
    fontSize: {
        name: 'Font size',
        description: 'Font size base',
        defaultValue: 'var(--gui-font--base)',
        toolbar: {
            icon: 'expand',
            items: [
                { value: '10px', right: '10px', title: 'Small' },
                { value: 'base', right: '12px', title: 'Base' },
                { value: '15px', right: '15px', title: 'Big' },
            ],
        },
    },
};
