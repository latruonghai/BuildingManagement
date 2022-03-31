import { Dispatch } from "react";
import { BasicComponentProps } from './components/index';

export interface BasicOnclickHandle {
    onClickHandler?: Dispatch<BasicButtonAction> | any;
}
export interface BasicButtonTagStyle {
    contentButton: string;
    classNameStyle?: string;
    type?: "button" | "submit" | "reset";
}
export interface BasicButtonAction {
    type?: string;
}

export interface  BasicHTMLElement{
    class_name?: string;
    id_name?: string;
}

export interface BasicImageProperties {
    imSrc?: string;
    title?: string;
    id?:number;
}

export interface BasicComponentElement{
    element: JSX.Element;
}

export interface ToggleImageViewAction extends BasicButtonAction {
    idSelector: number;
}