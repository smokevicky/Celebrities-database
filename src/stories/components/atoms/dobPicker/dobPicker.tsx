import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';

export interface DobPickerProps {
    defaultValue: string;
    onChange: (value: string) => void;
}

export const DobPicker = (props: DobPickerProps) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker format='YYYY-MM-DD' defaultValue={dayjs(props.defaultValue)} />
        </LocalizationProvider>
    );
};

export default DobPicker;
