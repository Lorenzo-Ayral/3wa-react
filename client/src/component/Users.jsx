import React, { useEffect, useState } from "react";
import axios from "axios";

function Users() {
    const [post, setPost] = useState([]);

    useEffect(() => {
        let token = localStorage.getItem('token');
        axios.post("http://localhost:9000/api/collaborateurs", {
            authorization: localStorage.getItem('token'),
        })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            Users
            {post.map((item, i) => {
                return (
                    <div key={i}>
                        <p>{item?.firstname}</p>
                        <p>{item?.lastname}</p>
                        <p>{item?.email}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default Users;
