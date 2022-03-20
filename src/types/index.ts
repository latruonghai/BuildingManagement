enum LoginAction {
    Login= "Login",
    Logout = "Logout"
}

export interface LoginState{
    type: string;
    isLogin: boolean;
}
export type BasicAction = {
    type: string;
}
export interface ButtonAction{
    name?:string;
    action?: BasicAction;
}


export interface LogoStyle{
    logo: string;
    title?: string;
}

export interface CategoricalList{
    items: string[];
}
export default LoginAction;
