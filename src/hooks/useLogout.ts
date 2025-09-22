import { useMutation, useQueryClient } from "@tanstack/react-query"
import { api } from "@/lib/api"
import { clearToken } from "@/lib/token"

export function useLogout(){
    const queryClient = useQueryClient()


    return useMutation({
        mutationKey: ["logout"],
        mutationFn: async () => {

            const response = await api.post(`/auth/logout`)

            if(response.status !== 200){
                if(response.status === 401){
                    clearToken()
                    return;
                }
                throw new Error(response.data.message || "Unknown error")
            }

            return;
        },
        onSuccess: () => {
            clearToken();
        },
        onSettled: () => {
            queryClient.invalidateQueries()
        }
    })
}