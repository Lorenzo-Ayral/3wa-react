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
