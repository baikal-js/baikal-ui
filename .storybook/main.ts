module.exports = {
  stories: ['../src/**/*.stories.@(ts|tsx|js|jsx)'],
  typescript: {
    check: true,
  },
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-addon-sass-postcss'
  ],
  core: {

    "builder": "webpack5"
  }
}
