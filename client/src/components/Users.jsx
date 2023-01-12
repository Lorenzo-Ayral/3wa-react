import React, {useEffect, useState} from "react";
import {getAllCollaborators} from "../services/collaborateurManager.js";
import SearchBar from "./SearchBar.jsx";
import calculateAge, {formatDate} from "../services/dateAge.js";
import "./Users.css"

function Users() {
    const [users, setUsers] = useState([]);
    const [userSearch, setUserSearch] = useState('');
    const [filteredUsers, setFilteredUsers] = useState(users);

    useEffect(() => {
        getAllCollaborators().then((data) => {
            setUsers(data.data);
            setFilteredUsers(data.data);
        });
    }, []);
    const searchHandler = e => {
        setUserSearch(e.target.value);
        const searchResults = users.filter(user =>
            user.firstname.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setFilteredUsers(searchResults);
    };

    function handleSearch({search, type}) {
        setUserSearch(search);
        const filteredUsers = users.filter((user) => {
            if (type === "name") {
                return (
                    user.firstname.toLowerCase().includes(search.toLowerCase()) ||
                    user.lastname.toLowerCase().includes(search.toLowerCase())
                );
            } else {
                return user.city.toLowerCase().includes(search.toLowerCase());
            }
        });
        setFilteredUsers(filteredUsers);
    }

    return (
        <>
            <h1 className="h1-list">Liste des collaborateurs</h1>
            <SearchBar search={userSearch} onChange={searchHandler} onSubmit={handleSearch}/>
            <div className="cards-container">
                <div className="cards">
                    {filteredUsers.map((user, i) => (
                        <div className="card-body" key={user.id}>
                            <img src={user.photo}></img>
                            <div className="card-infos">
                                <p>{user.firstname}, {user.lastname}, <span
                                    className="infos-age">({calculateAge(user.birthdate)} ans)</span></p>
                                <p>{user.city}, {user.country}</p>
                                <a href={`mailto:${user.email}`}>📩 {user.email}</a>
                                <br/>
                                <a href={`tel:${user.phone}`}>📞 {user.phone}</a>
                                <p>🎂 Anniversaire : {formatDate(user.birthdate)}</p>
                                <p>Service : {user.service}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Users;