import type { Preview } from "@storybook/react";
import '@src/styles/envs/colors.css'
import '@src/styles/global.css'
import '@src/styles/envs/sizes.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
