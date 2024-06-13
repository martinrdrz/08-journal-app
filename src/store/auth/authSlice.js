import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'not-authenticated', //'checkeing', "not-authenticated", "authenticated"
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage: null,
    },
    reducers: {
        login: (state, action) => {},
        logout: (state, payload) => {},
        checkingCredentials: (state) => {},
    },
});

//actions creators functions are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions;
