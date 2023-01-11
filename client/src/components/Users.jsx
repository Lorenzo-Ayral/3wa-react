import React, { useEffect, useState } from "react";
import axios from "axios";
import {clearToken} from "../features/token.jsx";
import {useSelector} from "react-redux";

import {getAllCollaborators} from "../services/allCollaborator.js";
import {getRandomCollaborator} from "../services/randomCollaborator.js";
function Users() {
    const [post, setPost] = useState([]);
    const [randomFirstname, setRandomFirstname] = useState([]);
    const [randomLastname, setRandomLastname] = useState([]);


    
    useEffect(()=>{
        getRandomCollaborator().then(data=>{
            setRandomFirstname(data.data.firstname)
            setRandomLastname(data.data.lastname)
        })
    },[])



// getRandomCollaborator().then(data=>{

//     console.log(data.data.firstname);
// })




    const token = useSelector((state) => state.token);
    
        return (
            <div>
                <button onClick={() => clearToken}/>
                <pre>{JSON.stringify(token)}</pre>
                <h1>Users</h1>
                <p>{randomFirstname}</p>
                <p>{randomLastname}</p>
            </div>
        );
    }
    
    export default Users;


