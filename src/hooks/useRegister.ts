import { api } from "@/lib/api"
import { useMutation } from "@tanstack/react-query"
import type { AxiosResponse } from "axios"

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
            const response = await api.post(`/auth/register`, data )

            const result: AxiosResponse<RegisterResponseData> = await response.data

            if(response.status !== 201 && response.status !== 200){
                throw new Error(result.data.message || "RequestError");
            }
            
            return result.data
        }
    })
}