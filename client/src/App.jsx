import { useState } from 'react';
// import { Provider } from 'react-redux';
import './App.css'
import { Routes, Route, Navigate } from "react-router-dom";

import Login from './views/Login';
import Home from './views/Home';



function App() {



    return (

        <div className="App">

            {/* <Login /> */}
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Home />} />
                {/* <Route path="/search" element={<SearchCollaborator />} /> */}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </div>

    )
}

export default App