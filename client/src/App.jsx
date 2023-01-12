import {useState} from 'react';
// import { Provider } from 'react-redux';
import './App.css'
import {Routes, Route, Navigate} from "react-router-dom";

import Login from './views/Login';
import Home from './views/Home';
import Header from './components/Header';
import Users from "./components/Users.jsx";
import Profile from "./components/profile/Profile.jsx"



function App() {

    return (

        <div className="App">
            <Header/>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="users" element={<Users/>}/>
                <Route path="profile" element={<Profile/>}/>
                <Route path="*" element={<Navigate to="/"/>}/>
            </Routes>
        </div>

    )
}

export default App