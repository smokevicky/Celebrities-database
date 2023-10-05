import type { Meta, StoryObj } from '@storybook/react';

import { searchBox } from '@atoms';

const meta: Meta<typeof searchBox> = {
    title: 'Atoms/searchBox',
    component: searchBox,
};

export default meta;
type Story = StoryObj<typeof searchBox>;

export const Default: Story = {
  args: {
    value: 'test'
  },
};