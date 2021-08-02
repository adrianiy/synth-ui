const path = require('path');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = {
    webpackFinal: async (config, { configType }) => {
        // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
        // You can change the configuration based on that.
        // 'PRODUCTION' is used when building the static version of storybook.

        config.plugins.push(new ProgressBarPlugin());
        config.module.rules.push({
            test: /\.scss$/,
            use: [ 'style-loader', 'css-loader', 'sass-loader' ],
            include: path.resolve(__dirname, '../'),
        });
        config.node = {
            fs: 'empty',
            global: true,
        };
        // Return the altered config
        return config;
    },
    stories: [ '../**/*.stories.@(mdx|jsx|ts|tsx)' ],
    addons: [ '@storybook/preset-create-react-app', '@storybook/addon-links', '@storybook/addon-essentials' ],
};
