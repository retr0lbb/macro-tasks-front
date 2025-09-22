
export function setToken(token: string){
    sessionStorage.setItem(`@HYPERBOLIC_TASKS:access_token`, token)
}


export function getToken(): string{
    const token = sessionStorage.getItem("@HYPERBOLIC_TASKS:access_token")

    if(!token){
        return ""
    }

    return token
}

export function clearToken(){
    sessionStorage.removeItem("@HYPERBOLIC_TASKS:access_token")
}