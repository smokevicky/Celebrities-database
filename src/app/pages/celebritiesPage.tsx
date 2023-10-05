import React from 'react';
import { SearchBoxProps } from '@atoms';
import { AccordionGroupProps } from '@molecules';
import { Celebrities } from '@templates';

export const CelebritiesPage = () => {
    const searchBoxData: SearchBoxProps = {
        value: '',
        onChange: (value) => {
            alert(value);
        },
    };

    const accordionGroupData: AccordionGroupProps = {
        content: [],
    };

    return <Celebrities searchBoxData={searchBoxData} accordionGroupData={accordionGroupData}></Celebrities>;
};
