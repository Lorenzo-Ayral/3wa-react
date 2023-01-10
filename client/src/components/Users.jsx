import React, { useEffect, useState } from "react";
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

getRandomCollaborator().then(data=>{

    console.log(data.data.firstname);
})


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
        </div>
    );
}

export default Users;
