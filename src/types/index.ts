import {BasicButtonAction } from './basicType';
export enum LoginAction {
    LOGIN = 'LOGIN',
    LOGOUT = "LOGOUT"
}
export enum ToggleAction {
    TOGGLE = 'TOGGLE'
}

export enum ImageViewHandleActionEnum{
    FETCH_IMAGE_VIEW_DATA = 'FETCH_IMAGE_VIEW_DATA',
    SELECT_VIEW_IMAGE = 'SELECT_VIEW_IMAGE'
}
export enum BasicActionEnum {
    DO_NOTHING = 'DO_NOTHING'
}
export enum RedoUndoActionEnum {
    REDO = 'REDO',
    UNDO = 'UNDO',
    CURRENT_STATE = 'CURRENT_STATE'
}
export enum ImageUploadStateEnum{
    UPLOAD_IMAGE = 'UPLOAD_IMAGE',
    
}
export enum ReactComponentSelectionEnum{
    SLIDE_SHOW = 'SLIDE_SHOW',
    UPLOAD_VIEW = 'UPLOAD_VIEW',
}
export enum ImageHandleActionEnum {
    GET_ALL_IMAGES = 'GET_ALL_IMAGES',
    UPLOAD = "UPLOAD",
    DELETE = "DELETE_IMAGE",
    UPDATE = "UPDATE_IMAGE"
}

export enum CanvasActionEnum {
    SET_IS_DRAWING = "SET_IS_DRAWING",
    SET_LINE_WIDTH = "SET_LINE_WIDTH",
    SET_LINE_COLOR = "SET_LINE_COLOR",
    SET_OPACITY = "SET_OPACITY",
    SET_IS_SHOWING = "SET_IS_SHOWING",
}
export enum SlideshowAction {
    PREVIOUS = "PREVIOUS",
    NEXT = "NEXT",
    EXACTINDEX = "EXACTINDEX"
}
export enum ImageViewActionEnum {
    VIEW_IMAGE = "VIEW_IMAGE"
}
export interface LoginState {
    type: string;
    isLogin: boolean;
}

export interface ButtonAction {
    name?: string;
    action?: BasicButtonAction;
}


export interface LogoStyle {
    logo: string;
    title?: string;
}

export interface CategoricalList {
    items: string[];
}
