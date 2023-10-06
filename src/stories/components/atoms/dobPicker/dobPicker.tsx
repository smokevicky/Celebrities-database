import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';

export interface DobPickerProps {
    defaultValue: string | Date;
    onChange?: (value: Date) => void;
}

export const DobPicker = (props: DobPickerProps) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                format='YYYY-MM-DD'
                defaultValue={dayjs(props.defaultValue)}
                onChange={(event) => {
                    if (event) {
                        props.onChange?.(event.toDate());
                    }
                }}
            />
        </LocalizationProvider>
    );
};

export default DobPicker;
