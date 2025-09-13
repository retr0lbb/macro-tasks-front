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
            const response = await fetch(`secret/auth/login`, {
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