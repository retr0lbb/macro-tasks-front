/** biome-ignore-all lint/suspicious/noExplicitAny: <no need> */
import { api } from "@/lib/api"
import { setToken } from "@/lib/token"
import { useMutation } from "@tanstack/react-query"
import type { AxiosResponse } from "axios"
import type { LoginResponseData } from "./useFetchLogin"

interface RegisterFormData {
    userName: string
    email: string
    password: string
}

interface RegisterResponseData {
    message: string
    createdUser: {
        id: string
        email: string
        userName: string
    }
}

export function useRegister(){

    return useMutation({
        mutationKey: ["register"],
        mutationFn: async (data: RegisterFormData) => {
            const response: AxiosResponse<RegisterResponseData> = await api.post(`/auth/register`, data )

            if(response.status !== 201 && response.status !== 200){
                throw new Error(response.data.message || "RequestError");
            }
            
            return response.data
        },
        onSuccess: async (_, variables) => {
            try {
                const BACKEND_URL = import.meta.env.VITE_BACKEND_URL
                if(!BACKEND_URL){
                    throw new Error("Backend Url missing")
                }

                const response: AxiosResponse<LoginResponseData> = await api.post(`/auth/login`, {
                    email: variables.email,
                    password: variables.password
                })

                if(response.status !== 200){
                    throw new Error(response.data.message || "Unknown error")
                }

                setToken(response.data.csrfToken)         

            } catch (error: any) {
                console.error(error.message || "An un expected Error occurred")
            }
        },
    })
}