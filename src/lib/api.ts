import axios from "axios"

const baseURl = (import.meta.env.VITE_BACKEND_URL);

if(!baseURl){
    throw new Error("Base URL not found")
}
const api = axios.create({baseURL: baseURl })

api.interceptors.request.use((config) => {
    const token = sessionStorage.getItem("@HYPERBOLIC_TASKS:access_token")
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})


export {api}