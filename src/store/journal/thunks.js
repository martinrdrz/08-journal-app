import { collection, doc, setDoc } from 'firebase/firestore';
import { FirebaseDB } from '../../firebase/config';

export const startNewNote = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        };

        const notesCollection = collection(FirebaseDB, `${uid}/journal/notes`);
        const newDoc = doc(notesCollection);
        const setDocResp = await setDoc(newDoc, newNote);

        console.log({ newDoc, setDocResp });
    };
};
