import { LogoStyle, CategoricalList } from '../index';
import { BasicButtonAction, BasicButtonTagStyle } from '../components/index';


export type FormComponentBasicProps = {
    type: string;
}

export interface ButtonProps extends BasicButtonTagStyle {
    buttonAction?: BasicButtonAction;
    onClickHandler?: any;
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
}
export interface ImageViewProps {
    imageSections: ImageSectionProps[];
}
export type NavBarProps = LogoStyle & CategoricalList & ButtonProps;