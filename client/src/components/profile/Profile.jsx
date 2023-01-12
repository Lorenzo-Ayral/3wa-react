import {useEffect, useState} from "react";
import {getCollaboratorById} from "../../services/getCollaboratorById.js";

function Profile() {
    const [photo, setPhoto] = useState([]);
    const [firstName, setFirstName] = useState([]);
    const [lastName, setLastName] = useState([]);
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [city, setCity] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [country, setCountry] = useState("");

    useEffect(() => {
        getCollaboratorById().then(data => {
            setFirstName(data.data.firstname)
            setLastName(data.data.lastname)
            setPhoto(data.data.photo)
            setCity(data.data.city)
            setEmail(data.data.email)
            setPhone(data.data.phone)
            setBirthdate(formatDate(data.data.birthdate))
            setCountry(data.data.country)
        })
    }, [])

    function formatDate(date) {
        const options = {
            day: 'numeric',
            month: 'long'
        };
        const formatter = new Intl.DateTimeFormat('fr-FR', options);
        return formatter.format(new Date(date));
    }

    return(
        <>
            <h1>Modifier mon profil</h1>
            <form>
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" value={firstName}/>
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" value={lastName}/>
                <label htmlFor="photo">Photo</label>
                <input type="text" id="photo" value={photo}/>
                <label htmlFor="city">City</label>
                <input type="text" id="city" value={city}/>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" value={email}/>
                <label htmlFor="phone">Phone</label>
                <input type="text" id="phone" value={phone}/>
                <label htmlFor="birthday">Date de naissance</label>
                <input type="text" id="birthday" value={birthdate}/>
                <label htmlFor="country">Pays</label>
                <input type="text" id="country" value={country}/>

                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default Profile