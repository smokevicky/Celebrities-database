import React, { useEffect, useState } from 'react';
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
import { Celebrity } from '@types';
import { Gender } from 'app/types/gender';

export interface AccordionAtomProps {
    isExpanded: boolean;
    id: number;
    firstName: string;
    lastName: string;
    profilePicture: string;
    dob: string | Date;
    country: string;
    description: string;
    gender: Gender;
    isInEditMode?: boolean;
    onChange: (isExpanded: string | false) => void;
    onSubmit: (updatedData?: Celebrity) => void;
    onDelete: (idToBeDeleted?: number) => void;
    onEditModeToggle: (isInEditMode: boolean) => void;
}

export const AccordionAtom = ({
    isExpanded,
    id,
    firstName,
    lastName,
    profilePicture,
    dob,
    country,
    description,
    gender,
    isInEditMode = false,
    onChange = () => {},
    onSubmit = () => {},
    onDelete = () => {},
    onEditModeToggle = () => {},
}: AccordionAtomProps) => {
    const [isEditMode, setIsEditMode] = useState<boolean>(isInEditMode);

    const [firstNameValue, setFirstNameValue] = useState<string>(firstName);
    const [lastNameValue, setLastNameValue] = useState<string>(lastName);
    const [dobValue, setDobValue] = useState<string | Date>(dob);
    const [countryValue, setCountryValue] = useState<string>(country);
    const [descriptionValue, setDescriptionValue] = useState<string>(description);
    const [genderValue, setGenderValue] = useState<Gender>(gender);

    useEffect(() => {
        setFirstNameValue(firstName);
        setLastNameValue(lastName);
        setDobValue(dob);
        setCountryValue(country);
        setDescriptionValue(description);
        setGenderValue(gender);
    }, [firstName, lastName, dob, country, description, gender]);

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
        const isAdult = getAge(dob.toString()) > 18;
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

    const handleEditStart = () => {
        if (isUserAnAdult()) {
            setIsEditMode(true);
            onEditModeToggle(true);
        }
    };

    const handleEditEnd = () => {
        setIsEditMode(false);
        onEditModeToggle(false);
    };

    const handleNameUpdate = (fullName: string) => {
        const calculatedFirstName = fullName?.split(' ')?.[0];
        const calculatedLastName = fullName?.split(' ')?.[1];

        if (calculatedFirstName) setFirstNameValue(calculatedFirstName);
        if (calculatedLastName) setLastNameValue(calculatedLastName);
    };

    const handleSubmit = () => {
        const celebrity: Celebrity = {
            id: id,
            first: firstNameValue,
            last: lastNameValue,
            picture: profilePicture,
            dob: dobValue.toString(),
            country: countryValue,
            description: descriptionValue,
            gender: genderValue.value,
        };

        onSubmit(celebrity);
        handleEditEnd();
    };

    const handleDelete = () => {
        onDelete(id);
    };

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
                        <Avatar alt={`${firstNameValue}-${lastNameValue}`} src={profilePicture} size='lg' />
                        {isEditMode ? (
                            <TextField
                                defaultValue={`${firstNameValue} ${lastNameValue}`}
                                type='text'
                                variant='outlined'
                                onChange={(event) => handleNameUpdate(event.target.value)}
                            />
                        ) : (
                            <Typography variant='h5' sx={styles.userName}>
                                {`${firstNameValue} ${lastNameValue}`}
                            </Typography>
                        )}
                    </Box>
                </AccordionSummary>

                <AccordionDetails sx={styles.user}>
                    <Box sx={styles.userDetail}>
                        {/* DOB */}
                        <Box sx={styles.userData}>
                            <Typography sx={styles.primaryText}>Age</Typography>
                            {isEditMode ? (
                                <DobPicker
                                    defaultValue={dobValue}
                                    onChange={(updatedValue) => setDobValue(updatedValue)}
                                />
                            ) : (
                                <Typography sx={styles.secondaryText}>{`${getAge(
                                    dobValue.toString()
                                )} Years`}</Typography>
                            )}
                        </Box>

                        {/* gender */}
                        <Box sx={styles.userData}>
                            <Typography sx={styles.primaryText}>Gender</Typography>
                            {isEditMode ? (
                                <FormControl variant='outlined'>
                                    <Select
                                        labelId='demo-simple-select-outlined-label'
                                        id='demo-simple-select-outlined'
                                        onChange={(event) =>
                                            setGenderValue(
                                                Object.values(GenderData).filter(
                                                    (g) => g.value === event.target.value
                                                )?.[0]
                                            )
                                        }
                                        label='Age'
                                        defaultValue={genderValue.value}
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
                                <Typography sx={styles.secondaryText}>{genderValue.label}</Typography>
                            )}
                        </Box>

                        {/* country */}
                        <Box sx={styles.userData}>
                            <Typography sx={styles.primaryText}>Country</Typography>
                            {isEditMode ? (
                                <TextField
                                    defaultValue={countryValue}
                                    type='text'
                                    onChange={(event) => setCountryValue(event.target.value)}
                                />
                            ) : (
                                <Typography>{countryValue}</Typography>
                            )}
                        </Box>
                    </Box>

                    {/* description */}
                    <Box sx={styles.userData}>
                        <Typography sx={styles.primaryText}>Description</Typography>
                        {isEditMode ? (
                            <Textarea
                                defaultValue={descriptionValue}
                                onChange={(event) => setDescriptionValue(event.target.value)}
                                minRows='5'
                            />
                        ) : (
                            <Typography variant='subtitle1'>{descriptionValue}</Typography>
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
                                    onClick={handleDelete}
                                />
                                <EditOutlined
                                    sx={styles.userActionIcons}
                                    style={{ color: '#057DFF' }}
                                    onClick={handleEditStart}
                                />
                            </>
                        ) : (
                            <>
                                <CancelOutlined
                                    sx={styles.userActionIcons}
                                    style={{ color: '#FF3D0A' }}
                                    onClick={handleEditEnd}
                                />
                                <CheckCircleOutlineOutlined
                                    sx={styles.userActionIcons}
                                    style={{ color: '#38B000' }}
                                    onClick={handleSubmit}
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
