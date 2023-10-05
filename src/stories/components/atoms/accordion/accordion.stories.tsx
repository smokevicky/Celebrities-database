import { AccordionAtom } from '@atoms';
import type { Meta, StoryObj } from '@storybook/react';
import { GenderData } from 'app/apiData';

const meta: Meta<typeof AccordionAtom> = {
    title: 'Atoms/Accordion',
    component: AccordionAtom,
};

export default meta;
type Story = StoryObj<typeof AccordionAtom>;

export const Default: Story = {
    args: {
        isExpanded: false,
        firstName: 'John',
        lastName: 'Doe',
        profilePicture: 'https://randomuser.me/api/portraits/med/men/93.jpg',
        dob: '1973-10-16',
        country: 'New Zealand',
        description:
            'This character description generator will generate a fairly random description of a belonging to Aidan Wang. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Aidan Wang.',
        gender: GenderData.Male,
        onChange: () => {},
        onEditStart: () => {},
    },
};

export const Open: Story = {
    args: {
        isExpanded: true,
        firstName: 'John',
        lastName: 'Doe',
        profilePicture: 'https://randomuser.me/api/portraits/med/men/93.jpg',
        dob: '2010-10-16',
        country: 'New Zealand',
        description:
            'This character description generator will generate a fairly random description of a belonging to Aidan Wang. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Aidan Wang.',
        gender: GenderData.Female,
        onChange: () => {},
        onEditStart: () => {},
    },
};

export const InEditMode: Story = {
    args: {
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
        onEditStart: () => {},
    },
};
