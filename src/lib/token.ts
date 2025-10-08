
export function setToken(token: string){
    sessionStorage.setItem(`@HYPERBOLIC_TASKS:csrf_token`, token)
}


export function getToken(): string{
    const token = sessionStorage.getItem("@HYPERBOLIC_TASKS:csrf_token")

    if(!token){
        return ""
    }

    return token
}

export function clearToken(){
    sessionStorage.removeItem("@HYPERBOLIC_TASKS:csrf_token")
}