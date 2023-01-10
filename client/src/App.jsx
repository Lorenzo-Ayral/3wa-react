import { useState } from 'react'
import './App.css'
import Login from "./components/Login";
import Home from './views/home';

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
        <div className="App">

            {/* Si accessToGame est à true alors on affiche le Canvas, sinon on laisse le formulaire de Login affiché. */}
            {accessToGame ? <Home/>  : <Login checkIsLogged={verifyIsLogged}/>}

        </div>
    )
}

export default App