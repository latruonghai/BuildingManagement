import { LogoStyle, CategoricalList } from '../index';
import { BasicOnclickHandle, BasicButtonTagStyle, BasicButtonAction, BasicImageProperties } from '../basicType';
import { ImageSlideShowState } from '../states/imageState';
import { BasicComponentProps } from '../components/index';
import {BuildingResponseState } from '../states/request';


export type FormComponentBasicProps = {
    type: string;
}

export interface ButtonProps extends BasicButtonTagStyle, BasicOnclickHandle {
    buttonAction?: BasicButtonAction;
    description?: string;
}


export interface ImageSectionProps {

    imgDescription: string;
    imSrc: string;
    imgContent?: string;
    dispatchAction?: any;
    haveButton?: boolean;
}

export interface ImageSectionComponentProps extends ImageSectionProps {
    idImage?: number;
    imageDataSlideShowArray?: ImageSlideShowState[]
}
export interface ImageViewProps {
    imageSections: ImageSectionProps[];
}
export type NavBarProps = LogoStyle & CategoricalList & ButtonProps;

export interface CanvasProps {
    isShowing?: boolean;
    toggle?: any;
    imgSrc?: string;
}

export interface InputProps extends BasicComponentProps, FormComponentBasicProps{
    placeholder?: string;
    acceptFile?: string;
    tabIndex?: number;
    autoComplete?: "off" | "on";
    style?: {};
}

// export interface ImageViewProps extends BasicComponentProps{
//     image_array: BuildingResponseState[];
// }