import { setToken } from "@/lib/setToken"
import { useMutation } from "@tanstack/react-query"
import {api} from "@/lib/api"
import type { AxiosResponse } from "axios"


interface LoginRequiredData{
    email: string,
    password: string
}
interface LoginResponseData{
    message: string,
    token: string
}

export function useFetchLogin(){

    return useMutation({
        mutationKey: ["login"],
        mutationFn: async (data: LoginRequiredData) => {
            const BACKEND_URL = import.meta.env.VITE_BACKEND_URL
            if(!BACKEND_URL){
                throw new Error("Backend Url missing")
            }

            const response: AxiosResponse<LoginResponseData> = await api.post(`/auth/login`, data)

            if(response.status !== 200){
                throw new Error(response.data.message || "Unknown error")
            }

            setToken(response.data.token)

            return response.data
        }
    })
}