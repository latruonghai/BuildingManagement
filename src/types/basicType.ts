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

export interface BasicImageProperties {
    imageSrc?: string;
    imageTitle?: string;
}

