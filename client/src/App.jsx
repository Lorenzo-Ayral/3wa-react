import { useState } from 'react';
import {Provider} from 'react-redux';
import './App.css'
import Card from './components/Card.jsx';
import Login from "./components/Login";
import Users from "./components/Users.jsx";
import store from './store/index.js';


function App() {
    const [count, setCount] = useState(0)

    const [accessToGame, setAccessToGame] = useState(false)

    const verifyIsLogged = (userIsLogged) => {
        // Si la donnée renvoyée est true, alors on met à true le state courant et on affiche le canvas.
        if (userIsLogged === true)
        {
            setAccessToGame(true)
        }
    }

    return (
        <Provider store={store}>
            <div className="App">

                {/* Si accessToGame est à true alors on affiche le Canvas, sinon on laisse le formulaire de Login affiché. */}
                {/* {accessToGame ? <Users/>  : <Login checkIsLogged={verifyIsLogged}/>} */}
                <Card/>
            </div>
        </Provider>
    )
}

export default App