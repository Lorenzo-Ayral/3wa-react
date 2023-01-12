import {useEffect, useState} from "react";
import {getCollaboratorById, updateCollaborator} from "../../services/collaborateurManager";


import {useNavigate , NavLink} from "react-router-dom";
import {selectUser} from "../../features/userStore";
import {useSelector} from "react-redux";

function Profile() {
    const [photo, setPhoto] = useState([]);
    const [firstname, setFirstName] = useState([]);
    const [lastname, setLastName] = useState([]);
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [city, setCity] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [country, setCountry] = useState("");
    const [gender, setGender] = useState("");
    const [service, setService] = useState("");


    const navigate = useNavigate();


    const {user} = useSelector(selectUser);



    useEffect(() => {

        if (localStorage.getItem("user") === null) {
            navigate("/login");
        }

        getCollaboratorById().then(data => {
            setBirthdate(data.data.birthdate)
            setCity(data.data.city)
            setCountry(data.data.country)
            setEmail(data.data.email)
            setFirstName(data.data.firstname)
            setGender(data.data.gender)
            setLastName(data.data.lastname)
            setPhone(data.data.phone)
            setPhoto(data.data.photo)
            setService(data.data.service)
        })
    }, [])

    function handleSubmit(e) {
        e.preventDefault();
        const data = {
            firstname,
            lastname,
            email,
            phone,
            city,
            birthdate,
            country,
            gender,
            photo,
            service
        }
        // updateCollaborator(data)
        console.log(updateCollaborator(data))
    }

    return(
        <>
            <h1>Modifier mon profil</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input name={"firstname"} onChange={(e)=>setFirstName(e.target.value)} type="text" id="firstName" value={firstname}/>
                <label htmlFor="lastName">Last Name</label>
                <input name={"lastname"} onChange={(e)=>setLastName(e.target.value)} type="text" id="lastName" value={lastname}/>
                <label htmlFor="photo">Photo</label>
                <input name={"photo"} onChange={(e)=>setPhoto(e.target.value)} type="text" id="photo" value={photo}/>
                <label htmlFor="city">City</label>
                <input name={"city"} onChange={(e)=>setCity(e.target.value)} type="text" id="city" value={city}/>
                <label htmlFor="email">Email</label>
                <input name={"email"} onChange={(e)=>setEmail(e.target.value)} type="text" id="email" value={email}/>
                <label htmlFor="phone">Phone</label>
                <input name={"phone"} onChange={(e)=>setPhone(e.target.value)} type="text" id="phone" value={phone}/>
                <label htmlFor="birthdate">Date de naissance</label>
                <input name={"birthdate"} onChange={(e)=>setBirthdate(e.target.value)} type="date" id="birthday" value={birthdate}/>
                <label htmlFor="country">Pays</label>
                <input name={"country"} onChange={(e)=>setCountry(e.target.value)} type="text" id="country" value={country}/>

                <label htmlFor="country">Pays</label>
                <input name={"country"} onChange={(e)=>setCountry(e.target.value)} type="text" id="country" value={country}/>

                <label name={"gender"} htmlFor="gender">Civilité</label>
                <select name="gender" onChange={(e) => setGender(e.target.value)} id="gender" value={gender}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                <label name={"service"} htmlFor="service">Service</label>
                <select name="service" onChange={(e) => setService(e.target.value)} id="service" value={service}>
                    <option value="Marketing">Marketing</option>
                    <option value="Technique">Technique</option>
                    <option value="Client">Client</option>
                </select>

                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default Profile