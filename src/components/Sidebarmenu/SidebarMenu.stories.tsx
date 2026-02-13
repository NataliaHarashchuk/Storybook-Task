import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import SidebarMenu from './SidebarMenu';

const meta: Meta<typeof SidebarMenu> = {
  title: 'Components/SidebarMenu',
  component: SidebarMenu,
};
export default meta;

const menuData = [
  { label: 'Home' },
  {
    label: 'Products',
    children: [
      {
        label: 'Electronics',
        children: [{ label: 'Phones' }, { label: 'Laptops' }],
      },
      { label: 'Clothing' },
    ],
  },
  { label: 'Contact Us' },
];

export const NestedMenu: StoryObj<typeof SidebarMenu> = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div style={{ height: '400px', border: '1px solid #eee' }}>
        <button onClick={() => setIsOpen(true)}>Open Menu</button>
        <SidebarMenu
          {...args}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          items={menuData}
        />
      </div>
    );
  },
};
