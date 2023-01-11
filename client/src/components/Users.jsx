import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {getAllCollaborators} from "../services/allCollaborator.js";

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllCollaborators().then((data) => {
            setUsers(data.data);
        });
    }, []);

    function calculateAge(age) {
        const birthdate = new Date(age);
        const ageDifMs = Date.now() - birthdate.getTime();
        const ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    function formatDate(date) {
        const options = {
            day: "numeric",
            month: "long",
        };
        const formatter = new Intl.DateTimeFormat("fr-FR", options);
        return formatter.format(new Date(date));
    }

    return (
        <>
            <h1>Users</h1>
            <div className="cards-container">
                <div className="cards">
                    {users.map((user, i) => (
                        <div className="card-body" key={i}>
                            <img src={user.photo}></img>
                            <div className="card-infos">
                                <p>{user.firstname}, {user.lastname}, <span
                                    className="infos-age">({calculateAge(user.birthdate)} ans)</span></p>
                                <p>{user.city}, {user.country}</p>
                                <a href={`mailto:${user.email}`}>📩 {user.email}</a>
                                <br/>
                                <a href={`tel:${user.phone}`}>📞 {user.phone}</a>
                                <p>🎂 Anniversaire : {formatDate(user.birthdate)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Users;