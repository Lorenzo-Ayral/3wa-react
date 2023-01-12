import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import logIn from "../services/apiManager";
import {selectUser} from "../features/userStore";
import {setUser} from "../features/userStore";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const {user} = useSelector(selectUser);
    const navigate = useNavigate();

// aussi
    useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, []);


    const handleSubmit = () => {
        logIn({email, password})
            .then((res) => {
                console.log("RESPONSE OK ", res.data);
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("user", JSON.stringify(res.data.user));
                dispatch(setUser(res.data.user));
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
                alert("Erreur de connexion");
            });
    };

    return (
        <div>
            <div>
                <h1>Connexion</h1>
                <p>Entrez votre identifiant et mot de passe</p>
            </div>

            <form onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
            }}>
                <div>
                    <div>
                        <label htmlFor="email">Email :</label>
                        <input
                            type="text"
                            name="email"
                            placeholder="ex: owen.lopez@example.com"
                            id="email"
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">
                            Mot de passe :
                        </label>
                        <input
                            type="text"
                            name="password"
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                    </div>
                </div>
                <button type="submit">Connexion</button>
            </form>

        </div>

    );


}
export default Login;