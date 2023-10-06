import React from 'react';
import { SearchBox, SearchBoxProps } from '@atoms';
import { AccordionGroup, AccordionGroupProps } from '@molecules';
import { Box, Typography } from '@mui/material';

export interface CelebritiesProps {
    searchBoxData: SearchBoxProps;
    accordionGroupData: AccordionGroupProps;
}

export const Celebrities = ({ searchBoxData, accordionGroupData }: CelebritiesProps) => {
    const styles = {
        searchBoxContainer: {
            marginY: '2.5rem',
        },
    };

    return (
        <Box>
            <Typography variant={'h5'}>Celebrities DB</Typography>
            <Box sx={styles.searchBoxContainer}>
                <SearchBox {...searchBoxData}></SearchBox>
            </Box>
            <AccordionGroup {...accordionGroupData}></AccordionGroup>
        </Box>
    );
};

export default Celebrities;
