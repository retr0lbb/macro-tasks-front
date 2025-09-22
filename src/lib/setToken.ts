
export function setToken(token: string){
    sessionStorage.setItem(`@HYPERBOLIC_TASKS:access_token`, token)
}