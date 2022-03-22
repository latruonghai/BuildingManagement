import { BasicAction } from './basicType';
export enum LoginAction {
    LOGIN = 'LOGIN',
    LOGOUT = "LOGOUT"
}
export enum ToggleAction {
    TOGGLE = 'TOGGLE'
}
export enum ImageHandleAction {
    UPLOAD = "UPLOAD_IMAGE",
    DELETE = "DELETE_IMAGE",
    UPDATE = "UPDATE_IMAGE"
}

export enum CanvasActionEnum {
    SET_IS_DRAWING = "SET_IS_DRAWING",
    SET_LINE_WIDTH = "SET_LINE_WIDTH",
    SET_LINE_COLOR = "SET_LINE_COLOR",
    SET_OPACITY = "SET_OPACITY",
}
export enum SlideshowAction {
    PREVIOUS = "PREVIOUS",
    NEXT = "NEXT",
    EXACTINDEX = "EXACTINDEX"
}
export enum ImageViewAction {
    VIEW_IMAGE = "VIEW_IMAGE"
}
export interface LoginState {
    type: string;
    isLogin: boolean;
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
