import "../src/App.css";
import '../src/config/global_styles.css';
import { addDecorator, addParameters } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

const customViewPorts = {
  Nokia3310: {
    name: "Nokia 0G",
    styles: {
      width: "240px",
      height: "320px",
    },
  },
};
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
  // layout: 'centered',
  
}
addParameters({
  viewport: {
    viewports: { ...INITIAL_VIEWPORTS, ...customViewPorts },
  },
});
