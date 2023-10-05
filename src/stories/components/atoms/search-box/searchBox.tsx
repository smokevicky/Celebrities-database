import React from 'react';
import TextField from '@mui/material/TextField';

export interface searchBoxProps {
    value: string;
    onChange: (value: string) => void;
}

export const searchBox = (props: searchBoxProps) => {
    const styles = {
        searchBox: {
            borderRadius: '1rem',
        },
    };

    return (
        <div>
            <TextField
                id='outlined-basic'
                label='Search user'
                variant='outlined'
                value={props.value}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.onChange(event?.target?.value)}
                fullWidth={true}
                sx={styles.searchBox}
            />
        </div>
    );
};

export default searchBox;
