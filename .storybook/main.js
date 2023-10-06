const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const toPath = (filePath) => path.join(process.cwd(), filePath);

const baseConfig = {
    stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/preset-create-react-app',
    ],
    features: {
        emotionAlias: false,
        modernInlineRendering: true,
    },
    framework: '@storybook/react',
    core: {
        builder: '@storybook/builder-webpack5',
    },
};

module.exports = {
    ...baseConfig,

    webpackFinal: async (config) => {
        config.resolve.plugins = config.resolve.plugins || [];
        config.resolve.plugins.push(
            new TsconfigPathsPlugin({
                configFile: path.resolve(__dirname, '../tsconfig.json'),
            })
        );

        return {
            ...config,
            resolve: {
                ...config.resolve,
                alias: {
                    ...config.resolve.alias,
                    '@emotion/core': toPath('node_modules/@emotion/react'),
                    'emotion-theming': toPath('node_modules/@emotion/react'),
                },
            },
        };
    },

    framework: {
        name: '@storybook/react-webpack5',
        options: {}
    },

    docs: {
        autodocs: true
    }
};
