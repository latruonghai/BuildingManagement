import { BasicAction, LogoStyle, CategoricalList } from '../index';


export type FormComponentBasicProps = {
    type: string;
}

export interface ButtonProps{
    contentButton: string;
    buttonConfig?: BasicAction;
}

export interface ImageSectionProps{
    imgDescription: string;
    imSrc: string;
}

export interface ImageViewProps{
    imageSections: ImageSectionProps[];
}
export type NavBarProps = LogoStyle & CategoricalList  & ButtonProps;