export enum LoginAction {
    LOGIN = 'LOGIN',
    LOGOUT = "LOGOUT"
}
export enum ToggleAction{
    TOGGLE = 'TOGGLE'
}
export enum ImageHandleAction {
    UPLOAD = "UPLOAD_IMAGE",
    DELETE = "DELETE_IMAGE",
    UPDATE = "UPDATE_IMAGE"
}

export enum ImageViewAction {
    VIEW_IMAGE = "VIEW_IMAGE"
}
export interface LoginState {
    type: string;
    isLogin: boolean;
}
export type BasicAction = {
    type: string;
}
export interface ButtonAction {
    name?: string;
    action?: BasicAction;
}


export interface LogoStyle {
    logo: string;
    title?: string;
}

export interface CategoricalList {
    items: string[];
}
