import axios from 'axios';

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




