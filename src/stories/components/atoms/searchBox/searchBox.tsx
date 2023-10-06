import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

export interface SearchBoxProps {
    defaultValue?: string;
    onChange: (value: string) => void;
}

export const SearchBox = (props: SearchBoxProps) => {
    const styles = {
        searchBox: {
            '& .MuiInputBase-root': {
                borderRadius: '1rem',
            },
        },
    };

    return (
        <Box>
            <TextField
                label='Search celebrities'
                variant='outlined'
                defaultValue={props.defaultValue}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.onChange(event?.target?.value)}
                fullWidth={true}
                sx={styles.searchBox}
                placeholder={'Search celebrities'}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position='start'>
                            <SearchIcon />
                        </InputAdornment>
                    ),
                    type: 'search',
                }}
            />
        </Box>
    );
};

export default SearchBox;
