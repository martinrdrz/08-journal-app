import { SaveOutlined } from '@mui/icons-material';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { ImageGallery } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { useEffect, useMemo } from 'react';
import { setActiveNote, startSaveNote } from '../../store/journal';
import Swal from 'sweetalert2';

export const NoteView = () => {
    const dispatch = useDispatch();
    const { active: note, messageSaved, isSaving } = useSelector((state) => state.journal);
    const { title, body, date, onInputChange, formState } = useForm(note);

    const dataString = useMemo(() => {
        const newDate = new Date(date);
        return newDate.toUTCString();
    }, [date]);

    useEffect(() => {
        dispatch(setActiveNote(formState));
    }, [formState]);

    useEffect(() => {
        //messageSaved.length > 0 ? Swal.fire('Nota actualizada', messageSaved, 'success') : null;
        messageSaved.length > 0
            ? Swal.fire({
                  title: 'Nota actualizada',
                  text: messageSaved,
                  icon: 'success',
                  timer: 2000,
              })
            : null;
    }, [messageSaved]);

    const onSaveNote = () => {
        dispatch(startSaveNote());
    };

    return (
        <Grid
            className="animate__animated animate__fadeIn"
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ mb: 1 }}
        >
            <Grid item>
                <Typography fontSize={39} fontWeight="light">
                    {dataString}
                </Typography>
            </Grid>
            <Grid item>
                <Button disabled={isSaving} onClick={onSaveNote} color="primary" sx={{ padding: 2 }}>
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                    Guardar
                </Button>
            </Grid>
            <Grid container>
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="Ingrese un titulo"
                    label="Titulo"
                    sx={{ borde: 'none', mb: 1 }}
                    name="title"
                    value={title}
                    onChange={onInputChange}
                />
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="Que sucedió en el dia de hoy ?"
                    minRows={5}
                    name="body"
                    value={body}
                    onChange={onInputChange}
                />
            </Grid>
            <ImageGallery />
        </Grid>
    );
};
