import React from 'react';
import { SearchBox, SearchBoxProps } from '@atoms';
import { AccordionGroup, AccordionGroupProps } from '@molecules';
import { Box, Container, Typography } from '@mui/material';

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
        <Container maxWidth='md'>
            <Typography variant={'h5'}>Celebrities DB</Typography>
            <Box sx={styles.searchBoxContainer}>
                <SearchBox {...searchBoxData}></SearchBox>
            </Box>
            <AccordionGroup {...accordionGroupData}></AccordionGroup>
        </Container>
    );
};

export default Celebrities;
