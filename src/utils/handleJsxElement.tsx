// import { JsxElement } from 'typescript';
import { SlideshowItemProps } from '../types/components/SlideshowType';
import { SlideShowItem } from '../components/Slideshow';
export const showElement = <T extends unknown>(dataImage: SlideshowItemProps[], index: number): JSX.Element[] => {
    return dataImage.map((item: SlideshowItemProps, i: number) => {
        if (i !== index) {
            return <SlideShowItem key={i} title={item.title} imSrc={item.imSrc} class_name=" hidden" />
        }
        else {
            return <SlideShowItem key={i} title={item.title} imSrc={item.imSrc} class_name="" />
        }
    })
}

export const createElement = <T extends HTMLElement>(imSrc: string): HTMLImageElement => {
    let img = document.createElement('img');
    img.src = imSrc;
    return img;
}