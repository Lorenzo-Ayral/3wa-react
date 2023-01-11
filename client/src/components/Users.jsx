import React, {useEffect, useState} from "react";
import {getAllCollaborators} from "../services/allCollaborator.js";
import SearchBar from "./SearchBar.jsx";

function Users() {
    const [users, setUsers] = useState([]);
    const [userSearch, setUserSearch] = useState('');
    const [filteredUsers, setFilteredUsers] = useState(users);

    const searchHandler = e => {
        setUserSearch(e.target.value);
        const searchResults = users.filter(user =>
            user.firstname.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setFilteredUsers(searchResults);
    };


    useEffect(() => {
        getAllCollaborators().then((data) => {
            setUsers(data.data);
            setFilteredUsers(data.data);
        });
    }, []);

    function handleSearch(search) {
        setUserSearch(search);
        const filteredUsers = users.filter((user) => {
            return (
                user.firstname.toLowerCase().includes(search.toLowerCase()) ||
                user.lastname.toLowerCase().includes(search.toLowerCase())
            );
        });
        setFilteredUsers(filteredUsers);
    }

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
            <SearchBar search={userSearch} onChange={searchHandler} onSubmit={handleSearch}/>
            <div className="cards-container">
                <div className="cards">
                    {filteredUsers.map((user, i) => (
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