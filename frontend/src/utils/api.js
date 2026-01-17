import axios from 'axios';


export const baseUrl = axios.create({
    baseURL : `${import.meta.env.VITE_BACKEND_API}/api/`,
    headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    withCredentials : true
})


