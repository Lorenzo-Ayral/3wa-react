import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: null,
    isLoggedIn: false
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
            state.isLoggedIn = true;
        },
        clearToken: (state) => {
            state.token = null;
            state.isLoggedIn = false;
        },
    },
});

export const { setToken, clearToken } = authSlice.actions;
export default authSlice.reducer;