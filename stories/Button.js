import './button.css';

export const createButton = ({
  primary = false,
  label,
}) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = label;

  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  btn.className = ['storybook-button', mode].join(' ');

  return btn;
};
