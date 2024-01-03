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
    render: ({ label, ...args }) => {
        return `
<button class="button button--${args.buttonType}">
    ${label}
</button>
        `;
    },
};

export const TextButton = {
    args: {
        label: 'Button',
    },
};
