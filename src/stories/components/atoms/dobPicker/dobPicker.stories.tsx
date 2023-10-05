import { DobPicker } from '@atoms';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof DobPicker> = {
    title: 'Atoms/Dob Picker',
    component: DobPicker,
};

export default meta;
type Story = StoryObj<typeof DobPicker>;

export const Default: Story = {
    args: {
        defaultValue: '1973-10-16',
    },
};
