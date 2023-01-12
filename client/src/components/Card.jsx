import React, {useEffect, useState} from "react";
import getRandomCollaborator from "../services/collaborateurManager.js";
import "./Card.css"
import {calculateAge, formatDate} from "../services/dateAge";


const Card = ({randomUser}) => {
    if (!randomUser) return null;

    const randomPhoto = randomUser.photo;
    const randomFirstName = randomUser.firstname;
    const randomLastName = randomUser.lastname;
    const randomEmail = randomUser.email;
    const randomPhone = randomUser.phone;
    const age = calculateAge(randomUser.birthdate);
    const city = randomUser.city;
    const birthdate = formatDate(randomUser.birthdate);
    const country = randomUser.country;
    const service = randomUser.service;


    return (
        <div className="card-container">
            <div className="card-body">
                <img src={randomPhoto} alt="image du profil"/>
                <div className="card-infos">
                    <h4>{randomFirstName}, {randomLastName} <span className="infos-age">({age}ans)</span></h4>
                    <p>{city}, {country}</p>
                    <a href={`mailto:${randomEmail}`}>📩{randomEmail}</a>
                    <br/>
                    <a href='${randomPhone}'>📞{randomPhone}</a>
                    <p>🎂Anniversaire : {birthdate}</p>
                    <p>Service : {service}</p>
                </div>
            </div>
        </div>
    )

}

export default Card