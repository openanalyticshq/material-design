import type { StoryObj, Meta } from '@storybook/react';
import type { ButtonProps } from './index';
import Button from './index';

const meta: Meta<ButtonProps> =  {
  component: Button,
  title: 'Button',
};

type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
  args: {
    labelText: 'Click me!',
  },
};

export default meta;
