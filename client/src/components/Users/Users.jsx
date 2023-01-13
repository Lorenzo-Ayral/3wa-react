import React, {useEffect, useState} from "react";
import {getAllCollaborators} from "../../services/collaborateurManager.js";
import SearchBar from "../SearchBar.jsx";
import calculateAge, {formatDate} from "../../services/dateAge.js";
import {useNavigate} from "react-router-dom";
import {selectUser} from "../../features/userStore.jsx";
import {useSelector} from "react-redux";
import {CSSTransition} from 'react-transition-group';
import './Users.css';

function Users() {
    const [users, setUsers] = useState([]);
    const [userSearch, setUserSearch] = useState('');
    const [filteredUsers, setFilteredUsers] = useState(users);
    const [cardIsVisible, setCardIsVisible] = useState(false);


    const navigate = useNavigate();


    const {user} = useSelector(selectUser);

    useEffect(() => {
        setCardIsVisible(false);
        setTimeout(() => {
            setCardIsVisible(true);
        }, 300);
    }, [filteredUsers]);


    useEffect(() => {
        if (localStorage.getItem("user") === null) {
            navigate("/login");
        }
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

    return (
        <>
            <h1 className="h1-list">Liste des collaborateurs</h1>
            <SearchBar search={userSearch} onChange={searchHandler} onSubmit={handleSearch}/>
            <div className="cards-container">
                <div className="cards">
                    {filteredUsers.map((user, i) => (
                        <CSSTransition key={user.id} timeout={300} classNames="fade" in={cardIsVisible} unmountOnExit>
                            <div className={`card-body ${cardIsVisible ? "fade-in" : ""}`}>
                                <img src={user.photo}></img>
                                <div className="card-infos">
                                    <p>
                                        {user.firstname}, {user.lastname}, <span
                                        className="infos-age">({calculateAge(user.birthdate)} ans)</span>
                                    </p>
                                    <p>{user.city}, {user.country}</p>
                                    <a href={`mailto:${user.email}`}>📩 {user.email}</a>
                                    <br/>
                                    <a href={`tel:${user.phone}`}>📞 {user.phone}</a>
                                    <p>🎂 Anniversaire : {formatDate(user.birthdate)}</p>
                                    <p>Service : {user.service}</p>
                                </div>
                            </div>
                        </CSSTransition>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Users;