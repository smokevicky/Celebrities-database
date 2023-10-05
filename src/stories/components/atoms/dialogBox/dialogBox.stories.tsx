import { DialogBox } from '@atoms';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof DialogBox> = {
    title: 'Atoms/Dialog Box',
    component: DialogBox,
};

export default meta;
type Story = StoryObj<typeof DialogBox>;

export const Default: Story = {
    args: {
        isOpen: true,
    },
};
