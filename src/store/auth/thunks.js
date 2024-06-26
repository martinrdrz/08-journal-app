import { ArrowForward } from '@mui/icons-material';
import {
    loginWithEmailPassword,
    logoutFirebase,
    registerUserWithEmailPassword,
    singInWithGoogle,
} from '../../firebase/providers';
import { checkingCredentials, login, logout } from './authSlice';
import { clearNotesLogout } from '../journal';

export const checkingAuthentication = (email, password) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
    };
};

export const startGoogleSignIn = () => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const result = await singInWithGoogle();
        //console.log({ result });
        if (!result.ok) {
            return dispatch(logout({ errorMessage: result.errorMessage }));
        }
        dispatch(login(result));
    };
};

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassword({
            email,
            password,
            displayName,
        });
        if (!ok) return dispatch(logout({ errorMessage }));
        dispatch(login({ uid, displayName, email, photoURL }));
    };
};

export const startLoginWithEmailPassword = ({ email, password }) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const { ok, uid, photoURL, displayName, errorMessage } = await loginWithEmailPassword({ email, password });
        if (!ok) return dispatch(logout({ errorMessage }));
        dispatch(login({ uid, displayName, email, photoURL }));
    };
};

export const starLogout = () => {
    return async (dispatch) => {
        await logoutFirebase();
        dispatch(clearNotesLogout());
        dispatch(logout({}));
    };
};
