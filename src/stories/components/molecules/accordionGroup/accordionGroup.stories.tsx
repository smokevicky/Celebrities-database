import { GenderData } from '@apiData';
import { AccordionGroup } from '@molecules';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof AccordionGroup> = {
    title: 'Molecules/Accordion Group',
    component: AccordionGroup,
};

export default meta;
type Story = StoryObj<typeof AccordionGroup>;

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
        onEditModeToggle: () => {},
    },
];

const accordionContentEditMode = [
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
        isInEditMode: true,
        onChange: () => {},
        onSubmit: () => {},
        onEditModeToggle: () => {},
    },
    {
        id: 3,
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
        onEditModeToggle: () => {},
    },
];

export const Default: Story = {
    args: {
        content: accordionContent,
    },
};

export const EditModeOpen: Story = {
    args: {
        content: accordionContentEditMode,
        isEditModeOpen: true,
        expandedPanel: 'celebrity0',
    },
};

export const Empty: Story = {
    args: {
        content: [],
    },
};
