import { PropItem } from 'react-docgen-typescript'

const ARIA_PROP_REGEX = /aria.*/
const ON_PROP_REGEX = /on.*/

export default {
  core: {
    builder: 'webpack5',
  },

  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    'creevey',
  ],

  typescript: {
    // Generate docs/control table on-the-fly using react-docgen-typescript
    // Note: this is an alternative to using the scripted generation of .meta.json files. The desire was to not have to
    // maintain all the generated .meta.json files, but there is a tradeoff with performance, and sometimes correctness when
    // using the auto-gen like this.
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
      propFilter: (prop: PropItem) => {
        if (
          [ARIA_PROP_REGEX, ON_PROP_REGEX].find(regex => regex.test(prop.name))
        ) {
          return false
        }
        return true
      },
    },
  },
  webpackFinal: (config: any) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        symlinks: true,
      },
    }
  },
}