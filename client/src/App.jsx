import {useState} from 'react';
import {Provider} from 'react-redux';
import './App.css'
import Login from "./components/Login";
import store from './store/index.js';
import Users from "./components/Users.jsx";
import {Route, BrowserRouter, NavLink, Routes, Navigate} from "react-router-dom";
import Card from "./components/Card.jsx"

/*import {Header} from "./components/header/Header.jsx";*/


function App() {
    const [accessToGame, setAccessToGame] = useState(false)

    const verifyIsLogged = (userIsLogged) => {
        // Si la donnée renvoyée est true, alors on met à true le state courant et on affiche le canvas.
        if (userIsLogged === true) {
            setAccessToGame(true)
        }
    }

    return (
        <Provider store={store}>
            <div className="App">

                {/* Si accessToGame est à true alors on affiche le Canvas, sinon on laisse le formulaire de Login affiché.*/}
                {accessToGame ? <>
                    <BrowserRouter>
                        <ul className="navlinks">
                            <li>
                                <NavLink to={'/users'} as={Users}>Liste</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/card'} as={Card}>Random</NavLink>
                            </li>
                        </ul>
                        {/*  Routes qui permet de lister les routes disponibles/ */}
                        <Routes>
                            <Route path="card" element={<Card/>}/>
                            <Route path="users" element={<Users/>}/>
                            <Route path="login" element={<Login/>}/>
                            {/*                            <Route path="*" element={<Navigate to="/login" />} />*/}
                        </Routes>
                    </BrowserRouter>
                </> : <Login checkIsLogged={verifyIsLogged}/>}

            </div>
        </Provider>
    )
}

export default App