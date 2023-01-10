import {configureStore} from '@reduxjs/toolkit';
import tokenReducer from '../features/token.jsx';

const store = configureStore({
    reducer: {
        token: tokenReducer,
    }
})

export default store;