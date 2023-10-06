import React, { useState } from 'react';
import { CelebritiesData } from '@apiData';
import { DialogBox, SearchBoxProps } from '@atoms';
import { AccordionGroupProps } from '@molecules';
import { Box } from '@mui/material';
import { Celebrities } from '@templates';
import { Celebrity } from '@types';

import { CelebrityDataUtilities } from '../dataUtilities/celebrityDataUtilities';

export const CelebritiesPage = () => {
    const styles = {
        celebritiesContainer: {
            backgroundColor: '#0f19241c',
        },
    };

    const originalCelebrityData: Celebrity[] = Array.from(CelebritiesData);
    const [celebrityData, setCelebrityData] = useState<Celebrity[]>(originalCelebrityData);
    const [toBeDeletedId, setToBeDeletedId] = useState<number>(0);

    const isDeleteModalVisible = () => {
        return toBeDeletedId !== 0;
    };

    const resetToBeDeletedId = () => {
        setToBeDeletedId(0);
    };

    const onSubmit = (updatedData?: Celebrity) => {
        if (updatedData) {
            setCelebrityData(CelebrityDataUtilities.getUpdatedCelebritiesData(celebrityData, updatedData));
        }
    };

    const onDelete = (idToBeDeleted?: number) => {
        setToBeDeletedId(idToBeDeleted ?? 0);
    };

    const onDeleteConfirm = () => {
        if (toBeDeletedId) {
            setCelebrityData(CelebrityDataUtilities.getAfterDeleteCelebritiesData(celebrityData, toBeDeletedId ?? 0));
            resetToBeDeletedId();
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
        ...CelebrityDataUtilities.getFormattedCelebrityData(celebrityData, onSubmit, onDelete),
    };

    return (
        <Box sx={styles.celebritiesContainer}>
            {isDeleteModalVisible() && (
                <DialogBox isOpen={true} onConfirm={onDeleteConfirm} onCancel={resetToBeDeletedId}></DialogBox>
            )}

            <Celebrities searchBoxData={searchBoxData} accordionGroupData={accordionGroupData}></Celebrities>
        </Box>
    );
};
