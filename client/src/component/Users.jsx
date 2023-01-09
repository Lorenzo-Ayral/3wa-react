import React, { useEffect, useState } from "react";
import axios from "axios";

function Users() {
    const [post, setPost] = useState([]);

    useEffect(() => {
        axios.get("../3wa-react/server-json/data/collaborateurs.json").then((response) => {
            console.log(data);
            setPost(data?.data);
        });
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
