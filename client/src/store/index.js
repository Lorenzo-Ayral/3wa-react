import { configureStore } from '@reduxjs/toolkit';
<<<<<<< HEAD
import tokenReducer from '../features/token.js';
=======
import tokenReducer from '../features/token.jsx';
>>>>>>> branch-marty

const store = configureStore({
    reducer: {
        token: tokenReducer,
    }
})

export default store;