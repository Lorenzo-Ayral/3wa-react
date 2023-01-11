import axios from "axios";

const jsonwebtoken = require('jsonwebtoken');

module.exports = function auth(req, res, next) {
    if (!req.headers.authorization)
        return res.send(401, {error: 'Accès refusé. Vous devez être authentifié avec un token'});

    // Extraction du token du header HTTP "Authorization"
    const [, token] = req.headers.authorization.split(' ');

    // Vérification de la validité du token
    try {
        const decodedToken = jsonwebtoken.verify(
            token,
            process.env.APP_TOKEN_SECRET
        );
        req.token = token;
        req.user = decodedToken;

        next();
    } catch (e) {
        return res.send(403, {error: 'Accès refusé. Token invalide'});
    }
}


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