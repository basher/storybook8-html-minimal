import './button.css';

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction
export default {
  title: 'Components/Button',
  argTypes: {
    label: { control: 'text' },
    buttonType: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
  },
  render: ({ label, ...args }) => {
    return `
      <button class="button button--${args.buttonType}">
        ${label}
      </button>
    `;
  },
};

// More on writing stories with args: https://storybook.js.org/docs/html/writing-stories/args
export const TextButton = {
  args: {
    label: 'Button',
  },
};
