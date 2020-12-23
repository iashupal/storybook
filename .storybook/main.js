module.exports = {
  "stories": [
    "../src/components/**/*.stories.js",
    "../src/shared/**/*.stories.js",
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-viewport",
    "@storybook/addon-knobs",
    "@storybook/addon-a11y",
    "@storbook/addon-console",
    "@storybook/addon-storysource",
    "@storybook/addon-actions",
  ]
}