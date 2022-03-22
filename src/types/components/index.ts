import { BuildingImageState } from '../states/imageState';
import { BasicButtonAction } from '../basicType';
import { Props, PropsWithChildren } from 'react';
export type ButtonActionType = string;



export interface ButtonLoginAction extends BasicButtonAction {

}
export interface BasicComponentProps {
    class_name?: string;
    children?: JSX.Element;
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


