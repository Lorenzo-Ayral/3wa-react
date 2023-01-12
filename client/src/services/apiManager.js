import axios from "axios";

export default async function logIn(payload) {
    return await axios.post("http://localhost:9000/api/login", payload);
}

