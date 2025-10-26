import { useQuery } from "@tanstack/react-query"
import { api } from "@/lib/api"
import type { AxiosResponse } from "axios"
import { getToken } from "@/lib/token"


interface useGetUserInfoResponse{
    email: string
    username: string
}

export function useGetUserInfo(){
    return useQuery({
        queryKey: ["user-info"],
        queryFn: async () => {
            const BACKEND_URL = import.meta.env.VITE_BACKEND_URL
            if(!BACKEND_URL){
                throw new Error("Backend Url missing")
            }

            const response: AxiosResponse<useGetUserInfoResponse> = await api.get(`/user/info`, {
                headers: {
                    "X-CSRF-Token": getToken()
                }
            })

            if(response.status !== 200){
                throw new Error("Unknown error")
            }

            return response.data
        },
        staleTime: 1000 * 60 * 5,
        refetchOnWindowFocus: false,
    })
}