
export function setToken(token: string){
    sessionStorage.setItem(`@HYPERBOLIC_TASKS:csrf_token`, token)
}


export function getToken(): string{
    const token = sessionStorage.getItem("@HYPERBOLIC_TASKS:csrf_token")

    if(!token){
        // throw new Error("Token not found")
        console.log(token)
    }

    return token ?? ""
}

export function clearToken(){
    sessionStorage.removeItem("@HYPERBOLIC_TASKS:csrf_token")
}