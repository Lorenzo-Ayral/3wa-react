import {NavLink} from "react-router-dom";
import Card from "../Card/Card.jsx";
import Users from "../Users/Users.jsx";
import Profile from "../Profile/Profile.jsx";
import LogoutButton from "../../services/deconnection.jsx";
import {useSelector} from "react-redux";
import {selectUser} from "../../features/userStore.jsx";
import "./Header.css"

function Header() {

    const {user} = useSelector(selectUser);

    return (
        <>
            <nav className="nav">
                <div className="intranet">
                    <NavLink to={'/card'} as={Card}>INTRANET</NavLink>
                </div>


                {user ?
                    <ul className="navlinks">

                        <li>
                            <NavLink className="lo" to={'/users'} as={Users}>Liste</NavLink>
                        </li>

                        <li>
                            <NavLink className="lo" to={'/Profile'} as={Profile}>Profil</NavLink>
                        </li>

                        <li>
                            <LogoutButton/>
                        </li>

                    </ul>
                    : null}
            </nav>
        </>
    )
}

export default Header;