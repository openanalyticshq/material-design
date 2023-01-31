import { rootMain } from '../../../.storybook/main';

import type { StorybookConfig, Options } from '@storybook/core-common';



const config: StorybookConfig = {
  ...rootMain,
  stories: [
    ...rootMain.stories,
    '../lib/**/*.stories.@(js|jsx|ts|tsx|mdx)'
  ],
  addons: [...(rootMain.addons || []) , '@nrwl/react/plugins/storybook'],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module?.rules?.push(
      {
        test: /\.[tj]sx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'swc-loader',
          options: {
            parseMap: true
          }
        }
      }
    );

    // Return the altered config
    return config;
  },
};

module.exports = config;


// To customize your webpack configuration you can use the webpackFinal field.
// Check https://storybook.js.org/docs/react/builders/webpack#extending-storybooks-webpack-config


