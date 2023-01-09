import { useState } from 'react'
import './App.css'
import Login from "./components/Login";
import Home from './views/home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Home/>
      <Login/>
    </div>
  )
}

export default App
