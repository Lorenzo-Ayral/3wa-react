import React, {useState} from 'react'
import './Login.css';
import axios from 'axios';

const Login = ( { checkIsLogged }) => {

    // On créé un state pour le user
    const [user, setUser] = useState({
        email:'',
        password:'',
    })

    // On créé un tableau d'erreurs
    const [errors, setErrors] = useState([]);

    // ON créé un booléen pour vérifier si l'utilisateur est connecté.
    const [isLogged, setIsLogged] = useState(false);
    
    // On met à jour les données du state en copiant le state original et en mettant à jour les values en fonction des noms des labels.
    const handleInputChange = (event) => {
        const {value, name} = event.target

        const updateUser = {
            ...user,
            [name]: value
        }

        setUser(updateUser)
    }


    // À la soumission du formulaire, on stoppe le comportement par défaut du navigateur (recharegment)
    const onSubmitForm = (e) => {
        e.preventDefault();
        console.log(user)

        // Création d'un tableau d'erreurs
        const updateErrors = [];

        // On vérifie que la longueur de la chaîne de caractères une fois les espaces vides retirés sont égaux à zéro alors on ajoute une erreur dans le tableau.
        if(user.email.trim().length ===0)
        {
            updateErrors.push('L\'email est vide');
        }

        if(user.password.trim().length ===0)
        {
            updateErrors.push('Le mot de passe est vide');
        }

        // Si le tableau d'erreurs est vide, alors on met l'utilisateur connecté à true, et on renvoie la même information au composant parent.
        if(updateErrors.length === 0) {
            axios.post("http://localhost:9000/api/login", {
                email: user.email,
                password: user.password
            })
                .then(res => localStorage.setItem("token", res.data.token))
                .catch(err => console.log(err));

            setIsLogged(true);
            checkIsLogged(true);
        }
        else
        {
            // Sinon, on met à jour le tableau d'erreurs.
            setErrors(updateErrors);
        }


    }
    return (
        <>
            <h3 className="Login-title">Connexion</h3>
            <form onSubmit={onSubmitForm} className="Form">
                <div className="Form-component">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" value={user.email} onChange={handleInputChange}/>
                </div>
                <div className="Form-component">
                    <label htmlFor="password">Mot de passe:</label>
                    <input type="password" name="password" value={user.password} onChange={handleInputChange}/>
                </div>
                <input type="submit" value="Jouer" />
            </form>
                {/* On mappe le tableau d'erreur s'il y en a. */}
                {errors.length > 0 ? 
                    <div>
                        { errors.map( (error, i) => <p key={i}>{ error }</p> ) }
                    </div>
                : null}
        </>
    )
}

export default Login