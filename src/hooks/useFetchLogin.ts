import { useMutation } from "@tanstack/react-query"


interface LoginRequiredData{
    email: string,
    password: string
}
interface LoginResponseData{
    token: string
}

export function useFetchLogin(){
    const BASE_URL = import.meta.env.BASE_URL

    return useMutation({
        mutationKey: ["login"],
        mutationFn: async (data: LoginRequiredData) => {
            const response = await fetch(`${BASE_URL}/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            })

            const result: LoginResponseData = await response.json()

            return result
        }
    })
}