import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { FirebaseAuth } from './config';
import { PhotoRounded } from '@mui/icons-material';

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: 'select_account', // This forces the account selection
});

export const singInWithGoogle = async () => {
    try {
        //await signOut(FirebaseAuth);
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        //const credentials = GoogleAuthProvider.credentialFromResult(result);
        //console.log({ credentials });
        const { displayName, email, photoURL, uid } = result.user;
        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid,
        };
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        return {
            ok: false,
            errorCode,
            errorMessage,
        };
    }
};

export const registerUserWithEmailPassword = async ({ email, password, displayName }) => {
    try {
        console.log(email);
        console.log(password);
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL } = resp.user;
        console.log(resp);
    } catch (error) {
        return { ok: false, errorMessage: error.message };
    }
};
