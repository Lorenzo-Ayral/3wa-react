import {NavLink} from "react-router-dom";
import Card from "./Card.jsx";
import Users from "./Users.jsx";
import Profile from "./profile/Profile.jsx";

function Header(){
    return(
        <>
            <ul className="navlinks">
                <li>
                    <NavLink to={'/users'} as={Users}>Liste</NavLink>
                </li>
                <li>
                    <NavLink to={'/card'} as={Card}>Random</NavLink>
                </li>
                <li>
                    <NavLink to={'/profile'} as={Profile}>Profil</NavLink>
                </li>
            </ul>
        </>
    )
}

export default Header;