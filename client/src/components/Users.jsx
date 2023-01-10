import React, {useEffect, useState} from "react";
import axios from "axios";
import {clearToken} from "../features/token.js";
import {useSelector} from "react-redux";
import {getAllCollaborators} from "../services/allCollaborator.js";
import {getRandomCollaborator} from "../services/randomCollaborator.js";
function Users() {
    const [randomPhoto, setRandomPhoto] = useState([]);
    const [randomFirstname, setRandomFirstname] = useState([]);
    const [randomSecondname, setRandomSecondname] = useState([]);
    const [age, setAge] = useState(null);
    const [city, setCity] = useState("");

    function calculateAge(birthdate) {
        var birthdate = new Date(birthdate);
        var ageDifMs = Date.now() - birthdate.getTime();
        var ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    useEffect(() => {
        getRandomCollaborator().then(data => {
            setRandomPhoto(data.data.photo)
            setRandomFirstname(data.data.firstname)
            setRandomSecondname(data.data.lastname)
            setAge(calculateAge(data.data.birthdate))
            setCity(data.data.city)
        })
    }, [])


    const token = useSelector((state) => state.token);
    return (
        <div>
            <button onClick={() => clearToken}/>
            <pre>{JSON.stringify(token)}</pre>
            <h1>Users</h1>
            <img src={randomPhoto}></img>
            <p>{randomFirstname}, {randomSecondname}, {age} ans</p>
            <p>{city}</p>
        </div>
    );
}

export default Users;