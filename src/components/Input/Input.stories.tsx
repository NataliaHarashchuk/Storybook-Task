import { useState } from 'react';
import Input from './Input';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState('');
    return <Input {...args} value={value} onChange={setValue} />;
  },
  args: {
    placeholder: 'Type something...',
  },
};

export const Password: Story = {
  render: (args) => {
    const [value, setValue] = useState('');
    return <Input {...args} value={value} onChange={setValue} />;
  },
  args: {
    type: 'password',
    placeholder: 'Enter password',
  },
};

export const Clearable: Story = {
  render: (args) => {
    const [value, setValue] = useState('');
    return <Input {...args} value={value} onChange={setValue} />;
  },
  args: {
    clearable: true,
    placeholder: 'Try to type and clear',
  },
};
