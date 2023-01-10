import React, { useEffect, useState } from "react";
<<<<<<< HEAD:client/src/component/Users.jsx
import axios from "axios";
import {clearToken} from "../features/token.js";
import {useSelector} from "react-redux";
import {getAllCollaborators} from "../services/allCollaborator.js";
import {getRandomCollaborator} from "../services/randomCollaborator.js";
function Users() {
    const [post, setPost] = useState([]);

/*    useEffect(() => {
        let token = localStorage.getItem('token');
        axios.post("http://localhost:9000/api/collaborateurs", {
            authorization: localStorage.getItem('token'),
        })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }, []);*/

    const token = useSelector((state) => state.token);
    return (
        <div>
            <button onClick={() => clearToken}/>
            <pre>{JSON.stringify(token)}</pre>
            Users
            {post.map((item, i) => {
                return (
                    <div key={i}>
                        <p>{getRandomCollaborator?.firstname}</p>
                        <p>{item?.lastname}</p>
                        <p>{item?.email}</p>
                    </div>

                );
            })}
=======
// import axios from "axios";
import getRandomCollaborator from "./random";


function Users() {
    

    


console.log(getRandomCollaborator());

    return (
        <div>
            <h2>User</h2>
            
>>>>>>> branch-marty:client/src/components/Users.jsx
        </div>
    );
}

<<<<<<< HEAD:client/src/component/Users.jsx
export default Users;
=======
export default Users;
>>>>>>> branch-marty:client/src/components/Users.jsx
