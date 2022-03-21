import { BuildingImageState } from '../states/imageState';
export type ButtonActionType = string;

export interface BasicButtonAction {
    type?: string;
}

export interface ButtonLoginAction extends BasicButtonAction {

}
export interface BasicButtonTagStyle {
    contentButton: string;
    classNameStyle?: string;
    type?: "button" | "submit" | "reset";
}
export interface ButtonUploadAction extends BasicButtonAction {
    idData: number;
    imageString: string;
    name: string;
}

export interface ModalProps extends BasicComponentProps {
    isShowing: boolean;
    toggle: any;
    bodyContent: BuildingImageState;
}

export interface BasicComponentProps {
    name: string;
}
