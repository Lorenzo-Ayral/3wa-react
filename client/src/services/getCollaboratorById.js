import axios from 'axios';


export async function getCollaboratorById() {
    const options = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    };
    return await axios.get(
        `http://localhost:9000/api/collaborateurs/${localStorage.getItem("userId")}`,
        options
    );
}