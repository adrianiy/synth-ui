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
    stories: [ '../src/**/*.stories.@(js|jsx|ts|tsx|mdx)' ],
    addons: [ '@storybook/addon-links', '@storybook/addon-essentials', 'creevey' ],
};
