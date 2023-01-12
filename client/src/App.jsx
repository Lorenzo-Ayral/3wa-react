import './App.css'
import {Routes, Route, Navigate} from "react-router-dom";

import Login from './views/Login';
import Home from './views/Home';
import Header from './components/Header/Header';
import Users from "./components/Users/Users.jsx";
import Profile from "./components/Profile/Profile.jsx"


function App() {


    return (

        <div className="App">

            {/* {localStorage.getItem("user") ? <Header/> : null} */}
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