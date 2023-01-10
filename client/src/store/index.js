import { configureStore } from '@reduxjs/toolkit';
import tokenReducer from '../features/token.js';

const store = configureStore({
    reducer: {
        token: tokenReducer,
    }
})

export default store;