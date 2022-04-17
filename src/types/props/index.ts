import { LogoStyle, CategoricalList } from '../index';
import {
    BasicOnclickHandle,
    BasicButtonTagStyle,
    BasicButtonAction,
    BasicHTMLElement
} from '../basicType';
import { ImageSlideShowState } from '../states/imageState';
import { BasicComponentProps } from '../components/index';
import React from 'react';
import { JsxElement } from 'typescript';
import { ImageViewState } from '../components/ImageViewState';
import { TableData } from '../data/index';

export type FormComponentBasicProps = {
    type: string;
};

export interface ButtonProps
    extends BasicButtonTagStyle,
        BasicOnclickHandle,
        BasicHTMLElement {
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
    imageDataSlideShowArray?: ImageSlideShowState[];
    functionCallBack?: (ev: any) => void;
}
export interface ImageViewProps {
    imageSections: ImageViewState[];
}
export type NavBarProps = LogoStyle & CategoricalList & ButtonProps;

export interface CanvasProps {
    isShowing?: boolean;
    toggle?: any;
    imgSrc?: string;
    imgData?: ImageSlideShowState;
}

export interface InputProps
    extends BasicComponentProps,
        FormComponentBasicProps {
    placeholder?: string;
    acceptFile?: string;
    tabIndex?: number;
    autoComplete?: 'off' | 'on';
    style?: {};
    text?: string;
    ref?: React.MutableRefObject<HTMLInputElement>;
    name?: string;
    label?: string;
}

// export interface ImageViewProps extends BasicComponentProps{
//     image_array: BuildingResponseState[];
// }

export interface FormProps extends BasicComponentProps {
    title?: string;
    footerSectionComponent?: JSX.Element;
    isFormShowing?: boolean;
}

export interface InputArrayProps {
    inputArray: InputProps[];
    onChangeCallBack?: (ev: any) => void;
}

export interface HTMLLabelProps {}

export interface FormInputProps extends BasicComponentProps {
    title?: string;
    inputArray: InputProps[];
    isFormShowing: boolean;
}

export interface OptionView extends BasicHTMLElement {
    onClickHandler?: (ev: any) => void;
    title?: string;
}

export interface OptionViewProps {
    arrayOptionView: OptionView[];
}

export interface TableProps extends BasicHTMLElement, TableData {}

export interface RowProps extends BasicComponentProps {
    body: ImageSlideShowState;
    // id_name: string;
}
