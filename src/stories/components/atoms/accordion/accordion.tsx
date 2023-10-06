import React, { useState } from 'react';
import { GenderData } from '@apiData';
import { DobPicker } from '@atoms';
import {
    CancelOutlined,
    CheckCircleOutlineOutlined,
    DeleteOutlined,
    EditOutlined,
    ExpandMore,
} from '@mui/icons-material';
import { Avatar, Textarea } from '@mui/joy';
import {
    Accordion,
    AccordionActions,
    AccordionDetails,
    AccordionSummary,
    Box,
    FormControl,
    MenuItem,
    Select,
    TextField,
    Typography,
} from '@mui/material';
import { Gender } from 'app/types/gender';

export interface AccordionAtomProps {
    isExpanded: boolean;
    firstName: string;
    lastName: string;
    profilePicture: string;
    dob: string;
    country: string;
    description: string;
    gender: Gender;
    isInEditMode?: boolean;
    onChange: (isExpanded: string | false) => void;
    onEditStart: (fieldName: string) => void;
}

export const AccordionAtom = ({
    isExpanded,
    firstName,
    lastName,
    profilePicture,
    dob,
    country,
    description,
    gender,
    isInEditMode = false,
    onChange = () => {},
    onEditStart = () => {},
}: AccordionAtomProps) => {
    const [isEditMode, setIsEditMode] = useState<boolean>(isInEditMode);

    const styles = {
        profilePicture: {
            border: '4px solid #CECECE',
            borderRadius: '50%',
        },
        userName: {
            marginLeft: '20px',
        },
        userDetail: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '90%',
        },
        userData: {
            marginTop: '2%',
        },
        user: {
            display: 'block',
        },
        primaryText: {
            color: '#767679',
            fontSize: '1.1rem',
        },
        secondaryText: {
            color: '#000',
            fontSize: '1rem',
        },
        userActionIcons: {
            fontSize: '1.5rem',
            cursor: 'pointer',
        },
        summaryContainer: {
            display: 'flex',
            alignItems: 'center',
        },
        accordionContainer: {
            paddingX: '1rem',
            paddingY: '10px',
            borderColor: '#0000004a',
        },
    };

    const isUserAnAdult = () => {
        const isAdult = getAge(dob) > 18;
        return !!isAdult;
    };

    const getAge = (dateString: string) => {
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    };

    const handleChange = (panel: string) => {
        onChange(isExpanded ? panel : false);
    };

    const handleEditStart = (fieldName?: string) => {
        if (getAge(dob) > 18) {
            setIsEditMode(true);
        }
        console.log(fieldName);
    };

    const handleDelete = () => {};
    const handleSubmit = () => {};

    return (
        <Box>
            <Accordion
                variant='outlined'
                expanded={isExpanded}
                onChange={() => handleChange('panel1')}
                sx={styles.accordionContainer}
            >
                <AccordionSummary expandIcon={<ExpandMore />}>
                    <Box sx={styles.summaryContainer}>
                        <Avatar alt={`${firstName}-${lastName}`} src={profilePicture} size='lg' />
                        {isEditMode ? (
                            <TextField
                                defaultValue={`${firstName} ${lastName}`}
                                type='text'
                                variant='outlined'
                                onChange={() => handleEditStart('name')}
                            />
                        ) : (
                            <Typography variant='h5' sx={styles.userName}>
                                {`${firstName} ${lastName}`}
                            </Typography>
                        )}
                    </Box>
                </AccordionSummary>

                <AccordionDetails sx={styles.user}>
                    <Box sx={styles.userDetail}>
                        <Box sx={styles.userData}>
                            <Typography sx={styles.primaryText}>Age</Typography>
                            {isEditMode ? (
                                <DobPicker defaultValue={dob} onChange={() => onEditStart('dob')} />
                            ) : (
                                <Typography sx={styles.secondaryText}>{`${getAge(dob)} Years`}</Typography>
                            )}
                        </Box>

                        <Box sx={styles.userData}>
                            <Typography sx={styles.primaryText}>Gender</Typography>
                            {isEditMode ? (
                                <FormControl variant='outlined'>
                                    <Select
                                        labelId='demo-simple-select-outlined-label'
                                        id='demo-simple-select-outlined'
                                        onChange={() => onEditStart('gender')}
                                        label='Age'
                                        defaultValue={gender.value}
                                    >
                                        {Object.values(GenderData).map((genderItem: Gender, index) => {
                                            return (
                                                <MenuItem key={`${index}-${genderItem.value}`} value={genderItem.value}>
                                                    {genderItem.label}
                                                </MenuItem>
                                            );
                                        })}
                                    </Select>
                                </FormControl>
                            ) : (
                                <Typography sx={styles.secondaryText}>{gender.label}</Typography>
                            )}
                        </Box>

                        <Box sx={styles.userData}>
                            <Typography sx={styles.primaryText}>Country</Typography>
                            {isEditMode ? (
                                <TextField defaultValue={country} type='text' onChange={() => onEditStart('country')} />
                            ) : (
                                <Typography>{country}</Typography>
                            )}
                        </Box>
                    </Box>

                    <Box sx={styles.userData}>
                        <Typography sx={styles.primaryText}>Description</Typography>
                        {isEditMode ? (
                            <Textarea
                                defaultValue={description}
                                onChange={() => onEditStart('description')}
                                minRows='5'
                            />
                        ) : (
                            <Typography variant='subtitle1'>{description}</Typography>
                        )}
                    </Box>
                </AccordionDetails>

                {isUserAnAdult() && (
                    <AccordionActions>
                        {!isEditMode ? (
                            <>
                                <DeleteOutlined
                                    sx={styles.userActionIcons}
                                    style={{ color: '#FF3500' }}
                                    onClick={() => handleDelete()}
                                />
                                <EditOutlined
                                    sx={styles.userActionIcons}
                                    style={{ color: '#057DFF' }}
                                    onClick={() => handleEditStart()}
                                />
                            </>
                        ) : (
                            <>
                                <CancelOutlined
                                    sx={styles.userActionIcons}
                                    style={{ color: '#FF3D0A' }}
                                    onClick={() => setIsEditMode(false)}
                                />
                                <CheckCircleOutlineOutlined
                                    sx={styles.userActionIcons}
                                    style={{ color: '#38B000' }}
                                    onClick={() => handleSubmit()}
                                />
                            </>
                        )}
                    </AccordionActions>
                )}
            </Accordion>
        </Box>
    );
};

export default AccordionAtom;
