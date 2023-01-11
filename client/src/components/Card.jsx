import React, {useEffect, useState} from "react";
import {getRandomCollaborator} from "../services/randomCollaborator.js";
import "./Card.css"


function Card() {
    const [post, setPost] = useState([]);
    const [randomPhoto, setRandomPhoto] = useState([]);
    const [randomFirstName, setRandomFirstName] = useState([]);
    const [randomLastName, setRandomLastName] = useState([]);
    const [randomEmail, setRandomEmail] = useState("");
    const [randomPhone, setRandomPhone] = useState("");
    const [age, setAge] = useState(null);
    const [city, setCity] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [country, setCountry] = useState("");
    const [service, setService] = useState("");


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

    console.log(getRandomCollaborator())

    useEffect(() => {
        getRandomCollaborator().then(data => {
            setRandomFirstName(data.data.firstname)
            setRandomLastName(data.data.lastname)
            setRandomPhoto(data.data.photo)
            setAge(calculateAge(data.data.birthdate))
            setCity(data.data.city)
            setRandomEmail(data.data.email)
            setRandomPhone(data.data.phone)
            setBirthdate(formatDate(data.data.birthdate))
            setCountry(data.data.country)
            setService(data.data.service)
        })
    }, [])


    return (
        <div className="card-body">
            <img src={randomPhoto} alt="image du profil"/>
            <div className="card-infos">
                <h4>{randomFirstName}, {randomLastName} <span className="infos-age">({age}ans)</span></h4>
                <p>{city}, {country}</p>
                <a href={`mailto:${randomEmail}`}>📩{randomEmail}</a>
                <a href='${randomPhone}'>📞{randomPhone}</a>
                <p>🎂Anniversaire : {birthdate}</p>
            </div>
        </div>
    )

}

export default Card