import { collection, getDocs } from 'firebase/firestore';
import { FirebaseDB } from '../firebase/config';

export const loadNotes = async (uid = '') => {
    if (!uid) throw new Error('El UID del usuario no existe'); // en teoria nunca deberai entraren esta linea ya que firestore me devuelve un uid valido siempre.
    const collectionRef = collection(FirebaseDB, `${uid}/journal/notes`);
    const docs = await getDocs(collectionRef);
    const notes = [];
    docs.forEach((doc) => {
        notes.push({ id: doc.id, ...doc.data() });
    });
    return notes;
};
