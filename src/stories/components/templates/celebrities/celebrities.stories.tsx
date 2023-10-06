import { GenderData } from '@apiData';
import type { Meta, StoryObj } from '@storybook/react';
import { Celebrities } from '@templates';

const meta: Meta<typeof Celebrities> = {
    title: 'Templates/Celebrities',
    component: Celebrities,
};

export default meta;
type Story = StoryObj<typeof Celebrities>;

const accordionContent = [
    {
        id: 1,
        isExpanded: true,
        firstName: 'John',
        lastName: 'Doe',
        profilePicture: 'https://randomuser.me/api/portraits/med/men/93.jpg',
        dob: '1973-10-16',
        country: 'New Zealand',
        description:
            'This character description generator will generate a fairly random description of a belonging to Aidan Wang. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Aidan Wang.',
        gender: GenderData.Male,
        onChange: () => {},
        onSubmit: () => {},
        onDelete: () => {},
        onEditModeToggle: () => {},
    },
    {
        id: 2,
        isExpanded: false,
        firstName: 'John',
        lastName: 'Doe',
        profilePicture: 'https://randomuser.me/api/portraits/med/men/93.jpg',
        dob: '2010-10-16',
        country: 'New Zealand',
        description:
            'This character description generator will generate a fairly random description of a belonging to Aidan Wang. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Aidan Wang.',
        gender: GenderData.Transgender,
        onChange: () => {},
        onSubmit: () => {},
        onDelete: () => {},
        onEditModeToggle: () => {},
    },
    {
        id: 3,
        isExpanded: false,
        firstName: 'John',
        lastName: 'Doe',
        profilePicture: 'https://randomuser.me/api/portraits/med/men/93.jpg',
        dob: '1973-10-16',
        country: 'New Zealand',
        description:
            'This character description generator will generate a fairly random description of a belonging to Aidan Wang. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Aidan Wang.',
        gender: GenderData.Female,
        onChange: () => {},
        onSubmit: () => {},
        onDelete: () => {},
        onEditModeToggle: () => {},
    },
];

export const Default: Story = {
    args: {
        searchBoxData: {
            onChange: () => {},
        },
        accordionGroupData: {
            content: accordionContent,
        },
    },
};
