import { GenderData } from '@apiData';
import { AccordionAtomProps } from '@atoms';
import { AccordionGroupProps } from '@molecules';
import { Celebrity, Gender } from '@types';

export const CelebrityDataUtilities = {
    // gets the formatted celebrities data from the api
    getFormattedCelebrityData: (celebrityData: Celebrity[], onSubmit?: () => void, onDelete?: () => void) => {
        const formattedCelebrityData: AccordionGroupProps = CelebrityDataUtilities.formatAccordionGroupData(
            celebrityData,
            onSubmit,
            onDelete
        );

        return formattedCelebrityData;
    },

    // formats group data for the accordian
    formatAccordionGroupData: (celebrityData: Celebrity[], onSubmit?: () => void, onDelete?: () => void) => {
        let formattedCelebrityData: AccordionGroupProps = {
            content: [],
        };

        celebrityData.forEach((celebrity) => {
            formattedCelebrityData.content.push(
                CelebrityDataUtilities.formatAccordionData(celebrity, onSubmit, onDelete)
            );
        });

        return formattedCelebrityData;
    },

    // formats celebrity for each accordian
    formatAccordionData: (
        celebrityData: Celebrity,
        onSubmit?: (updtedData?: Celebrity) => void,
        onDelete?: (idToBeDeleted?: number) => void
    ) => {
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
            onSubmit: (updtedData) => onSubmit?.(updtedData),
            onDelete: (idToBeDeleted) => onDelete?.(idToBeDeleted),
            onEditModeToggle: () => {},
        };

        return accordionData;
    },

    // gets filtered data by searchText
    getFilteredCelebritiesData: (celebrityData: Celebrity[], searchText: string) => {
        const filteredData = celebrityData.filter(
            (celebrity: Celebrity) =>
                celebrity.first.toLowerCase().includes(searchText) ||
                celebrity.last.toLowerCase().includes(searchText) ||
                celebrity.country.toLowerCase().includes(searchText) ||
                celebrity.description.toLowerCase().includes(searchText)
        );

        return filteredData;
    },

    // updates the updated celebrity node and appends into the original array
    getUpdatedCelebritiesData: (celebrityData: Celebrity[], updatedData: Celebrity) => {
        debugger;
        let toBeUpdatedNodeIndex = celebrityData.findIndex((c) => c.id === updatedData.id);
        if (toBeUpdatedNodeIndex > -1) {
            celebrityData[toBeUpdatedNodeIndex] = { ...updatedData };
        }
        return celebrityData;
    },

    // deletes the celebrity node from the array
    getAfterDeleteCelebritiesData: (celebrityData: Celebrity[], idToBeDeleted: number) => {
        return celebrityData.filter((c) => c.id !== idToBeDeleted);
    },
};
