import React, { useState } from 'react';
import { CelebritiesData } from '@apiData';
import { SearchBoxProps } from '@atoms';
import { AccordionGroupProps } from '@molecules';
import { Box } from '@mui/material';
import { Celebrities } from '@templates';
import { Celebrity } from '@types';

import { CelebrityDataUtilities } from '../dataUtilities/celebrityDataUtilities';

export const CelebritiesPage = () => {
    const styles = {
        celebritiesContainer: {
            padding: '4rem 10rem 4rem 10rem',
            backgroundColor: '#0f19241c',
        },
    };

    const originalCelebrityData: Celebrity[] = Array.from(CelebritiesData);
    const [celebrityData, setCelebrityData] = useState<Celebrity[]>(originalCelebrityData);

    const onSubmit = (updatedData?: Celebrity) => {
        if (updatedData) {
            setCelebrityData(CelebrityDataUtilities.getUpdatedCelebritiesData(celebrityData, updatedData) ?? []);
        }
    };

    const searchBoxData: SearchBoxProps = {
        onChange: (searchText) => {
            setCelebrityData(
                CelebrityDataUtilities.getFilteredCelebritiesData(originalCelebrityData, searchText.toLowerCase())
            );
        },
    };

    const accordionGroupData: AccordionGroupProps = {
        ...CelebrityDataUtilities.getFormattedCelebrityData(celebrityData, onSubmit),
    };

    return (
        <Box sx={styles.celebritiesContainer}>
            <Celebrities searchBoxData={searchBoxData} accordionGroupData={accordionGroupData}></Celebrities>
        </Box>
    );
};
