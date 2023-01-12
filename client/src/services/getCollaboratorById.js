import axios from 'axios';
import {current} from "@reduxjs/toolkit";


export async function getCollaboratorById() {
    const options = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    };
    const currentUser = JSON.parse(localStorage.getItem('user'));
    console.log(currentUser.id);
    return await axios.get(
        `http://localhost:9000/api/collaborateurs/${currentUser.id}`,
        options
    );
}