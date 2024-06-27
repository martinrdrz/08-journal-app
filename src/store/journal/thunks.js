import { collection, doc, setDoc } from 'firebase/firestore';
import { FirebaseDB } from '../../firebase/config';
import {
    addNewEmptyNote,
    savingNewNote,
    setActiveNote,
    setNotes,
    setPhotosToActiveNote,
    setSaving,
    updateNote,
} from './journalSlice';
import { fileUpload, loadNotes } from '../../helpers';

export const startNewNote = () => {
    return async (dispatch, getState) => {
        dispatch(savingNewNote());
        const { uid } = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        };

        const notesCollection = collection(FirebaseDB, `${uid}/journal/notes`);
        const newDoc = doc(notesCollection);
        const setDocResp = await setDoc(newDoc, newNote);

        newNote.id = newDoc.id;
        dispatch(addNewEmptyNote(newNote));
        dispatch(setActiveNote(newNote));
        //console.log({ newDoc, setDocResp });
    };
};

export const startLoadingNotes = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        if (!uid) throw new Error('El UID del usuario no existe'); // en teoria nunca deberai entraren esta linea ya que firestore me devuelve un uid valido siempre.
        const notes = await loadNotes(uid);
        dispatch(setNotes(notes));
    };
};

export const startSaveNote = () => {
    return async (dispatch, getState) => {
        dispatch(setSaving());
        const { uid } = getState().auth;
        const { active: note } = getState().journal;
        const noteToFireStore = { ...note };
        delete noteToFireStore.id;

        const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);
        await setDoc(docRef, noteToFireStore, { merge: true });
        dispatch(updateNote(note));
    };
};

export const startUploadingFiles = (files = []) => {
    return async (dispatch) => {
        dispatch(setSaving());
        const fileUploadPromises = [];
        for (const file of files) {
            fileUploadPromises.push(fileUpload(file));
        }
        const photosUrls = await Promise.all(fileUploadPromises);
        //console.log(photosUrls);
        dispatch(setPhotosToActiveNote(photosUrls));
    };
};

export const startDeletingNote = () => {
    //TODO
};
