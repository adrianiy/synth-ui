const path = require('path');
module.exports = {
    webpackFinal: async (config, { configType }) => {
        // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
        // You can change the configuration based on that.
        // 'PRODUCTION' is used when building the static version of storybook.

        // Make whatever fine-grained changes you need
        config.module.rules.push({
            test: /\.scss$/,
            use: [ 'style-loader', 'css-loader', 'sass-loader' ],
            include: path.resolve(__dirname, '../'),
        });

        // Return the altered config
        return config;
    },
    stories: [
        '../stories/**/*.stories.mdx',
        '../stories/**/*.stories.@(js|jsx|ts|tsx)',
        '../packages/synth-components/src/**/*.stories.mdx',
        '../packages/synth-components/src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-notes',
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-postcss',
        '@storybook/addon-viewport',
        '@storybook/preset-scss',
    ],
};
