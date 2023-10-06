import React, { ReactNode, useState } from 'react';
import { AccordionAtom, AccordionAtomProps } from '@atoms';
import SentimentDissatisfiedOutlinedIcon from '@mui/icons-material/SentimentDissatisfiedOutlined';
import { Box } from '@mui/material';

export interface AccordionGroupProps {
    content: AccordionAtomProps[];
    isEditModeOpen?: boolean;
    expandedPanel?: string;
}

export const AccordionGroup = ({ content, isEditModeOpen = false, expandedPanel }: AccordionGroupProps) => {
    const [expanded, setExpanded] = useState<string | false>(expandedPanel || false);
    const [isAtleastOneAccordionInEditMode, toggleEditMode] = useState<boolean>(isEditModeOpen);

    const handleChange = (panel: string) => {
        if (!isAtleastOneAccordionInEditMode) {
            setExpanded(panel && panel !== expanded ? panel : false);
        }
    };

    const handleEditModeToggle = (isInEditMode: boolean) => {
        toggleEditMode(isInEditMode);
    };

    const styles = {
        accordionContainer: {
            paddingY: '0.25rem',
        },
        emptyResult: {
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: '0.5rem',
            paddingY: '10rem',
        },
    };

    return (
        <Box>
            {content.length > 0 &&
                (content.map((celebrity, index) => (
                    <Box sx={styles.accordionContainer} key={index}>
                        <AccordionAtom
                            {...celebrity}
                            isExpanded={expanded === `celebrity${index}`}
                            onChange={() => handleChange(`celebrity${index}`)}
                            onEditModeToggle={handleEditModeToggle}
                        ></AccordionAtom>
                    </Box>
                )) as ReactNode)}
            {content.length < 1 && (
                <Box sx={styles.emptyResult}>
                    <SentimentDissatisfiedOutlinedIcon fontSize='large'></SentimentDissatisfiedOutlinedIcon>
                    No matching results!
                </Box>
            )}
        </Box>
    );
};

export default AccordionGroup;
