// import Slideshow from '../../components/Slideshow';
import { ImageDataDetail } from '../data/index';
import { BasicOnclickHandle } from '../basicType';
import { BasicComponentProps } from './index';

export interface SlideshowItemProps extends ImageDataDetail, BasicComponentProps {
    title: string;
}

export interface DotSlideShowProps extends BasicOnclickHandle {
    numberItems: number;
    currentItemDot: number;
}