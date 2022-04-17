import { BuildingImageState } from '../states/imageState';
import { BasicButtonAction, BasicHTMLElement } from '../basicType';

export type ButtonActionType = string;

export interface ButtonLoginAction extends BasicButtonAction {}
export interface BasicComponentProps extends BasicHTMLElement {
    children?: JSX.Element;
    handleCallback?: (ev: any) => void;
}

export interface ImageHandleAction extends BasicButtonAction {
    idData: number;
    name: string;
}

export interface ModalProps extends BasicComponentProps {
    isShowing: boolean;
    toggle: any;
    bodyContent: BuildingImageState;
}
