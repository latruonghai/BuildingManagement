import { LogoStyle, CategoricalList } from '../index';
import { BasicOnclickHandle, BasicButtonTagStyle, BasicButtonAction, BasicHTMLElement } from '../basicType';
import { ImageSlideShowState } from '../states/imageState';
import { BasicComponentProps } from '../components/index';
import React from 'react';


export type FormComponentBasicProps = {
    type: string;
}

export interface ButtonProps extends BasicButtonTagStyle, BasicOnclickHandle, BasicHTMLElement {
    buttonAction?: BasicButtonAction;
    description?: string;
}


export interface ImageSectionProps {

    imgDescription?: string;
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
    imgData?: ImageSlideShowState;
}

export interface InputProps extends BasicComponentProps, FormComponentBasicProps{
    placeholder?: string;
    acceptFile?: string;
    tabIndex?: number;
    autoComplete?: "off" | "on";
    style?: {};
    text?: string;
    ref?: React.MutableRefObject<HTMLInputElement>;
}

// export interface ImageViewProps extends BasicComponentProps{
//     image_array: BuildingResponseState[];
// }