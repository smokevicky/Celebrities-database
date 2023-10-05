import { SearchBox } from '@atoms';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SearchBox> = {
    title: 'Atoms/Search Box',
    component: SearchBox,
};

export default meta;
type Story = StoryObj<typeof SearchBox>;

export const Default: Story = {
    args: {
        value: 'test',
    },
};
