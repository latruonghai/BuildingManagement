import LoginAction from "../types"
const login = () => {
    return {
        type: LoginAction.Login
    }
}
const logout = () =>{
    return {
        type: LoginAction.Logout
    }
}
export {login, logout}