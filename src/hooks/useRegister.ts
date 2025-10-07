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
                const loginResponse: AxiosResponse<LoginResponseData> = await api.post("/auth/login", {
                    email: variables.email,
                    password: variables.password
                })

                if(loginResponse.status !== 200){
                    throw new Error("Something went wrong")
                }

                setToken(loginResponse.data.token)
            } catch (error: any) {
                console.error(error.message || "An un expected Error occurred")
            }
        },
    })
}