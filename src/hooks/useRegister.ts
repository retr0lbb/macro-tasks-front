import { useMutation } from "@tanstack/react-query"

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
            const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

            if(!BACKEND_URL){
                throw new Error("Could'nt read Env")
            }
            const response = await fetch(`${BACKEND_URL}/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            })

            const result: RegisterResponseData = await response.json()

            if(!response.ok){
                throw new Error(result?.message || "Erro na requisição");
            }
            
            return result
        }
    })
}