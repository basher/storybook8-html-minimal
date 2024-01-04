import './button.css';

export default {
    title: 'Components/Button',
    argTypes: {
        label: { control: 'text' },
        buttonType: {
            control: 'select',
            options: ['primary', 'secondary'],
        },
    },
    render: ({ ...args }) => {
        return `
<button class="button button--${args.buttonType}">
    ${args.label}
</button>
        `;
    },
};

export const TextButton = {
    args: {
        label: 'Button',
    },
};
