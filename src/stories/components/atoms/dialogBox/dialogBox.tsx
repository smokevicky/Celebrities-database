import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

export interface DialogBoxProps {
    isOpen: boolean;
    onConfirm: () => void;
    onCancel: () => void;
}

export const DialogBox = ({ isOpen = false, onConfirm = () => {}, onCancel = () => {} }: DialogBoxProps) => {
    const styles = {
        deleteBtn: {
            backgroundColor: '#FF3500',
            paddingX: '1rem',
        },
    };

    const [isModalOpen, toggleModal] = useState<boolean>(isOpen);

    const handleConfirm = () => {
        toggleModal(false);
        onConfirm();
    };

    const handleCancel = () => {
        toggleModal(false);
        onCancel();
    };

    return (
        <div>
            <Dialog
                open={isModalOpen}
                onClose={toggleModal}
                aria-labelledby='alert-dialog-title'
                aria-describedby='alert-dialog-description'
                fullWidth={true}
                maxWidth={'xs'}
            >
                <DialogContent>
                    <DialogContentText>Are you sure you want to delete?</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant='outlined' size='medium' onClick={handleCancel}>
                        Cancel
                    </Button>
                    <Button
                        variant='contained'
                        size='medium'
                        color='error'
                        sx={styles.deleteBtn}
                        onClick={handleConfirm}
                    >
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default DialogBox;
