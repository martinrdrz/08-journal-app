import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: true,
        messageSaved: '',
        notes: [],
        active: null,
        // active: {
        //     id: 'ABC123',
        //     title: '',
        //     body: '',
        //     date: 1234567,
        //     imageUrls: [], //https://foto1.jpg, https://foto2.jpg, https://foto3.jpg
        // },
    },
    reducers: {
        addNewEmptyNote: (state, action) => {
            //TODO
        },
        setActiveNote: (state, action) => {
            //TODO
        },
        setNotes: (state, action) => {
            //TODO
        },
        setSaving: (state, action) => {
            //TODO
        },
        updateNote: (state, action) => {
            //todo
        },
        deleteNodeById: (state, action) => {
            //TODO
        },
    },
});

//actions creators functions are generated for each case reducer function
export const { addNewEmptyNote, setActiveNote, setNotes, setSaving, updateNote, deleteNodeById } = journalSlice.actions;
