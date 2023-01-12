import React, {useState, useEffect} from "react";

import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectUser} from "../features/userStore";
import getRandomCollaborator from "../services/collaborateurManager";

import Card from "../components/Card";

const Home = () => {
    const navigate = useNavigate();

    const [randomUser, setRandomUser] = useState(null);

    const {user} = useSelector(selectUser);

    useEffect(() => {
        if (randomUser) {
            console.log("randomUser changed", randomUser);
        }
    }, [randomUser]);


    useEffect(() => {
        if (localStorage.getItem("user") === null) {
            navigate("/login");
        }
        getRandomCollaborator()
            .then((res) => {
                console.log("RESPONSE OK ", res.data);
                setRandomUser(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);


    return (
        <div className="home">
            <h1>Bienvenue sur l'Intranet</h1>
            <h2>La plateforme de l'entreprise qui permet de dire bonjour à ses collaborateurs</h2>
            <p>Avez-vous dit bonjour à :</p>
            {randomUser && <Card randomUser={randomUser}/>}
            {user && (
                <button
                    onClick={() => {
                        getRandomCollaborator()
                            .then((res) => {
                                console.log("RESPONSE OK ", res.data);
                                setRandomUser(res.data);
                            })
                            .catch((err) => {
                                console.log(err);
                            });
                    }}
                >
                    Dire bonjour à quelqu'un d'autre
                </button>
            )}

        </div>
    );
};

export default Home;
