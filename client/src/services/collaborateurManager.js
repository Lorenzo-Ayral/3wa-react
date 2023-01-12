import axios from "axios";


export default async function getRandomCollaborator() {
    const options = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    };
    return await axios.get(
        "http://localhost:9000/api/collaborateurs/random",
        options
    );
}

export async function getAllCollaborators() {
    const options = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    };
    return await axios.get("http://localhost:9000/api/collaborateurs/", options);
}

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

export async function updateCollaborator(data) {
    const headers = {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
    }
    const currentUser = JSON.parse(localStorage.getItem('user'));
    return await axios.put(
        `http://localhost:9000/api/collaborateurs/${currentUser.id}`,
        data,
        { headers }
    );
}
