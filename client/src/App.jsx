import React, { useState } from 'react'
import './App.css'
import Users from "./component/Users.jsx";
import Login from "./component/Login.jsx";


function App() {

  return (
    <div className="App">
        <Login></Login>
      <Users></Users>
    </div>
  )
}

export default App
