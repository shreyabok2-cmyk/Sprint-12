import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'disabled'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Primary: Story = {
  args: {
    title: 'Primary Card',
    description: 'Yeh primary state wali card hai jo standard view ke liye use hoti hai.',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    title: 'Secondary Card',
    description: 'Yeh secondary state wali card hai.',
    variant: 'secondary',
  },
};

export const Disabled: Story = {
  args: {
    title: 'Disabled Card',
    description: 'Yeh disabled state wali card hai.',
    variant: 'disabled',
  },
};