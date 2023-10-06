import { GenderData } from '@apiData';
import { AccordionAtomProps } from '@atoms';
import { AccordionGroupProps } from '@molecules';
import { Celebrity, Gender } from '@types';

export const CelebrityDataUtilities = {
    // gets the formatted celebrities data from the api
    getFormattedCelebrityData: (celebrityData: Celebrity[], onSubmit: () => void) => {
        const formattedCelebrityData: AccordionGroupProps = CelebrityDataUtilities.formatAccordionGroupData(
            celebrityData,
            onSubmit
        );

        return formattedCelebrityData;
    },

    // formats group data for the accordian
    formatAccordionGroupData: (celebrityData: Celebrity[], onSubmit: () => void) => {
        let formattedCelebrityData: AccordionGroupProps = {
            content: [],
        };

        Array.from(celebrityData).forEach((celebrity) => {
            formattedCelebrityData.content.push(CelebrityDataUtilities.formatAccordionData(celebrity, onSubmit));
        });

        return formattedCelebrityData;
    },

    // formats celebrity for each accordian
    formatAccordionData: (celebrityData: Celebrity, onSubmit: () => void) => {
        const accordionData: AccordionAtomProps = {
            id: celebrityData.id,
            firstName: celebrityData.first,
            lastName: celebrityData.last,
            dob: celebrityData.dob,
            gender:
                Object.values(GenderData).find((gender: Gender) => gender.value === celebrityData.gender) ??
                GenderData.Other,
            profilePicture: celebrityData.picture,
            country: celebrityData.country,
            description: celebrityData.description,
            isExpanded: false,
            isInEditMode: false,
            onChange: () => {},
            onSubmit: onSubmit,
            onEditModeToggle: () => {},
        };

        return accordionData;
    },

    // gets filtered data by searchText
    getFilteredCelebritiesData: (celebrityData: Celebrity[], searchText: string) => {
        const filteredData = celebrityData.filter(
            ({ first, last, description, country }) =>
                first.toLowerCase().includes(searchText) ||
                last.toLowerCase().includes(searchText) ||
                country.toLowerCase().includes(searchText) ||
                description.toLowerCase().includes(searchText)
        );

        return filteredData;
    },

    // updates the updated celebrity node and appends into the original array
    getUpdatedCelebritiesData: (celebrityData: Celebrity[], updatedData: Celebrity) => {
        let toBeUpdatedNodeIndex = celebrityData.findIndex((c) => c.id === updatedData.id);
        if (toBeUpdatedNodeIndex) {
            celebrityData[toBeUpdatedNodeIndex] = { ...updatedData };
        }
        return celebrityData;
    },
};
