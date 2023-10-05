import React, { ReactNode, useState } from 'react';
import { AccordionAtom, AccordionAtomProps } from '@atoms';
import { Box } from '@mui/material';

export interface AccordionGroupProps {
    content: AccordionAtomProps[];
    isEditModeOpen?: boolean;
    expandedPanel?: string;
}

export const AccordionGroup = ({ content, isEditModeOpen = false, expandedPanel }: AccordionGroupProps) => {
    const [expanded, setExpanded] = useState<string | false>(expandedPanel || false);

    const handleChange = (panel: string) => {
        if (!isEditModeOpen) {
            setExpanded(panel && panel !== expanded ? panel : false);
        }
    };

    const styles = {
        accordionContainer: {
            paddingY: '0.25rem',
        },
    };

    return (
        <Box>
            {content.length > 0 &&
                (content.map((celebrity, index) => (
                    <Box sx={styles.accordionContainer}>
                        <AccordionAtom
                            {...celebrity}
                            isExpanded={expanded === `celebrity${index}`}
                            onChange={() => handleChange(`celebrity${index}`)}
                        ></AccordionAtom>
                    </Box>
                )) as ReactNode)}
        </Box>
    );
};

export default AccordionGroup;
