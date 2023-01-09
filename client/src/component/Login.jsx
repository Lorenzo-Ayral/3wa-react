import React, {useState} from 'react'
import './Login.css';

const Login = ( { checkIsLogged }) => {

    // On créé un state pour le joueur
    const [player, setPlayer] = useState({
        firstname:'',
        lastname:'',
        email:''
    })

    // On créé un tableau d'erreurs
    const [errors, setErrors] = useState([]);

    // ON créé un booléen pour vérifier si l'utilisateur est connecté.
    const [isLogged, setIsLogged] = useState(false);
    
    // On met à jour les données du state en copiant le state original et en mettant à jour les values en fonction des noms des labels.
    const handleInputChange = (event) => {
        const {value, name} = event.target

        const updatePlayer = {
            ...player,
            [name]: value
        }

        setPlayer(updatePlayer)
    }


    // À la soumission du formulaire, on stoppe le comportement par défaut du navigateur (recharegment)
    const onSubmitForm = (e) => {
        e.preventDefault();
        console.log(player)

        // Création d'un tableau d'erreurs
        const updateErrors = [];

        // On vérifie que la longueur de la chaîne de caractères une fois les espaces vides retirés sont égaux à zéro alors on ajoute une erreur dans le tableau.
        if(player.firstname.trim().length === 0)
        {
            updateErrors.push('Le prénom est vide');
        }

        if(player.lastname.trim().length ===0)
        {
            updateErrors.push('Le nom est vide');
        }

        if(player.email.trim().length ===0)
        {
            updateErrors.push('L\'email est vide');
        }

        // Si le tableau d'erreurs est vide, alors on met l'utilisateur connecté à true, et on renvoie la même information au composant parent.
        if(updateErrors.length === 0)
        {
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
            <h3 className="Login-title">Jouer à Snake</h3>
            <form onSubmit={onSubmitForm} className="Form">
                <div className="Form-component">   
                    <label htmlFor="firstname">Prénom:</label>
                    <input type="text" name="firstname" value={player.firstname} onChange={handleInputChange}/>
                </div>
                <div className="Form-component">                       
                    <label htmlFor="lastname">Nom:</label>
                    <input type="text" name="lastname" value={player.lastname} onChange={handleInputChange}/>
                </div>
                <div className="Form-component">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" value={player.email} onChange={handleInputChange}/>
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