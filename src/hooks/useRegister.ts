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
            const response = await fetch(`secret/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            })

            const result: RegisterResponseData = await response.json()

            return result
        }
    })
}