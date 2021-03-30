const path = require('path');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = {
    webpackFinal: async (config, { configType }) => {
        // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
        // You can change the configuration based on that.
        // 'PRODUCTION' is used when building the static version of storybook.

        config.plugins.push(new ProgressBarPlugin());
        // Return the altered config
        return config;
    },
    refs: (config, { configType }) => {
        if (configType === 'DEVELOPMENT') {
            return {
                webComponents: {
                    title: 'Web Components',
                    url: 'http://localhost:6007',
                },
                angular: {
                    title: 'Angular',
                    url: 'http://localhost:6008',
                },
            };
        }
        return {
            webComponents: {
                title: 'Web Components',
                url: '/webcomponents',
            },
            angular: {
                title: 'Angular',
                url: '/angular',
            },
        };
    },
    stories: [ '../stories/**/*.stories.mdx' ],
    addons: [ '@storybook/addon-links', '@storybook/addon-essentials', 'creevey' ],
};
