import {useEffect} from "react";

function LogoutButton() {
    const handleLogout = () => {
        // Delete user's auth token
        localStorage.removeItem("user");
        // Redirect user to login page
        window.location.href = "/";
    };

    return <button onClick={handleLogout}>Logout</button>;
}

export default LogoutButton;
