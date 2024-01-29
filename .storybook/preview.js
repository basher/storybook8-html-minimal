/** @type { import('@storybook/html').Preview } */
const preview = {
  parameters: {
    options: {
      storySort: {
        order: ['Intro', 'Components'],
      },
    }
  },
};

export default preview;
