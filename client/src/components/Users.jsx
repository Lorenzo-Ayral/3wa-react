import React, {useEffect, useState} from "react";
import axios from "axios";
import {clearToken} from "../features/token.js";
import {useSelector} from "react-redux";
import {getAllCollaborators} from "../services/allCollaborator.js";
import {getRandomCollaborator} from "../services/randomCollaborator.js";
function Users() {
    const token = useSelector((state) => state.token);
    const [randomPhoto, setRandomPhoto] = useState([]);
    const [randomFirstname, setRandomFirstname] = useState([]);
    const [randomLastName, setRandomLastName] = useState([]);
    const [age, setAge] = useState(null);
    const [city, setCity] = useState("");
    const [randomEmail, setRandomEmail] = useState("");
    const [randomPhone, setRandomPhone] = useState("");
    const [birthdate, setBirthdate] = useState("");

    useEffect(() => {
        getRandomCollaborator().then(data => {
            setRandomPhoto(data.data.photo)
            setRandomFirstname(data.data.firstname)
            setRandomLastName(data.data.lastname)
            setAge(calculateAge(data.data.birthdate))
            setCity(data.data.city)
            setRandomEmail(data.data.email)
            setRandomPhone(data.data.phone)
            setBirthdate(formatDate(data.data.birthdate))
        })
    }, [])

    function calculateAge(age) {
        const birthdate = new Date(age);
        const ageDifMs = Date.now() - birthdate.getTime();
        const ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    function formatDate(date) {
        const options = {
            day: 'numeric',
            month: 'long'
        };
        const formatter = new Intl.DateTimeFormat('fr-FR', options);
        return formatter.format(new Date(date));
    }

    return (
        <div>
            <button onClick={() => clearToken}/>
            <pre>{JSON.stringify(token)}</pre>
            <h1>Users</h1>
            <img src={randomPhoto}></img>
            <p>{randomFirstname}, {randomLastName}, ({age} ans)</p>
            <p>{city}</p>
            <a href={`mailto:${randomEmail}`}>{randomEmail}</a>
            <br/>
            <a href='${randomPhone}'>{randomPhone}</a>
            <p>{birthdate}</p>
        </div>
    );
}

export default Users;