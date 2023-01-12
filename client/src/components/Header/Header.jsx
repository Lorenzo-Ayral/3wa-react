import { NavLink } from "react-router-dom";
import Card from "../Card.jsx";
import Users from "../Users.jsx";
import Profile from "../profile/Profile.jsx";
import "./Header.css"
import LogoutButton from "../../services/deconnection.jsx";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { selectUser } from "../../features/userStore.jsx";
import { setUser } from "../../features/userStore.jsx";

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
                            <NavLink  className="lo" to={'/profile'} as={Profile}>Profil</NavLink>
                        </li>

                        <li>
                            <LogoutButton />
                        </li>

                    </ul>
                    : null}
            </nav>
        </>
    )
}

export default Header;