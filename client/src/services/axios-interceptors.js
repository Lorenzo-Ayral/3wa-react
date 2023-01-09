import axios from 'axios';

let loading = null;

// Créez un intercepteur qui ajoute un en-tête d'authentification à toutes les requêtes
axios.interceptors.request.use(
    config => {
        config.headers.Authorization = 'Bearer TOKEN';
        return config;
    },
    error => Promise.reject(error)
);

// Créez un intercepteur qui affiche un message de chargement pendant que la requête est en cours d'exécution
axios.interceptors.request.use(
    config => {
        loading = document.getElementById('loading-message');
        loading.style.display = 'block';
        return config;
    },
    error => Promise.reject(error)
);

axios.interceptors.response.use(
    response => {
        loading.style.display = 'none';
        return response;
    },
    error => {
        loading.style.display = 'none';
        return Promise.reject(error);
    }
);
