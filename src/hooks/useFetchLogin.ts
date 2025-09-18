import { useMutation } from "@tanstack/react-query"


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
            const response = await fetch(`${BACKEND_URL}/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            })

            const result: LoginResponseData = await response.json()
            
            if(!response.ok){
                throw new Error(result?.message || "An unexpected error occurred")
            }

            return result
        }
    })
}