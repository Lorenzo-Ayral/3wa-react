import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from "react-redux";
import store from "./features/store";
import {HashRouter} from "react-router-dom";

import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <HashRouter>
                <App/>
            </HashRouter>
        </Provider>
    </React.StrictMode>,
)
