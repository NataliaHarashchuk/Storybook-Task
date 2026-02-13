import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import Toast from './Toast';

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Success: Story = {
  render: (args) => {
    const [show, setShow] = useState(false);
    return (
      <>
        <button onClick={() => setShow(true)}>Show Success Toast</button>
        <Toast {...args} isVisible={show} onClose={() => setShow(false)} />
      </>
    );
  },
  args: {
    message: 'Success!',
    type: 'success',
    duration: 3000,
  },
};

export const Error: Story = {
  render: (args) => {
    const [show, setShow] = useState(false);
    return (
      <>
        <button onClick={() => setShow(true)}>Show Error Toast</button>
        <Toast {...args} isVisible={show} onClose={() => setShow(false)} />
      </>
    );
  },
  args: {
    message: 'Error',
    type: 'error',
    duration: 3000,
  },
};

export const WarningShortDuration: Story = {
  render: (args) => {
    const [show, setShow] = useState(false);
    return (
      <>
        <button onClick={() => setShow(true)}>Show Warning Toast</button>
        <Toast {...args} isVisible={show} onClose={() => setShow(false)} />
      </>
    );
  },
  args: {
    message: 'Warning',
    type: 'warning',
    duration: 1000,
  },
};

export const InfoLongDuration: Story = {
  render: (args) => {
    const [show, setShow] = useState(false);
    return (
      <>
        <button onClick={() => setShow(true)}>Show Long Toast (10s)</button>
        <Toast {...args} isVisible={show} onClose={() => setShow(false)} />
      </>
    );
  },
  args: {
    message: 'Info',
    type: 'info',
    duration: 10000,
  },
};

export const WithoutCloseButton: Story = {
  render: (args) => {
    const [show, setShow] = useState(false);
    return (
      <>
        <button onClick={() => setShow(true)}>Show Toast without X</button>
        <Toast {...args} isVisible={show} onClose={() => setShow(false)} />
      </>
    );
  },
  args: {
    message: 'You cannot close this manually.',
    type: 'warning',
    showCloseButton: false,
    duration: 4000,
  },
};
