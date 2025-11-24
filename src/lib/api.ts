import axios from "axios"
import { clearToken, getToken } from "./token";

const baseURl = (import.meta.env.VITE_BACKEND_URL);

if(!baseURl){
    throw new Error("Base URL not found")
}
const api = axios.create({baseURL: baseURl, withCredentials: true })

api.interceptors.request.use((config) => {
    const token = getToken()
    if(token){
        config.headers["X-CSRF-TOKEN"] = token

        console.log(config.headers["X-CSRF-TOKEN"])
    }
    return config
})

api.interceptors.response.use(
  (response) => response, // sucesso
  async (error) => {      // erro (401, 500, etc)
    if (error.response?.status === 401) {
      console.warn("Token expirado, tentando refresh...")

      try {
        await api.get("/auth/refresh", {
          headers: {
            "X-CSRF-TOKEN": getToken(),
          },
        })

        const originalRequest = error.config
        return api(originalRequest)
      } catch (refreshError) {
        console.error("Refresh token falhou, deslogando...")
        clearToken()
        window.location.href = "/login"
        return Promise.reject(refreshError)
      }
    }

    return Promise.reject(error)
  }
)


export {api}