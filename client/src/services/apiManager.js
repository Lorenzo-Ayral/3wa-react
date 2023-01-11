import axios from "axios";

// login
export default async function logIn(payload) {
    return await axios.post("http://localhost:9000/api/login", payload);
  }










export async function getRandomCollaborator() {
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