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
    let img = new Image();
    // img.crossOrigin = "*";
    img.setAttribute('crossOrigin', 'anonymous');
    img.src = imSrc;
    return img;
}

export function canvasDrawing(ctx: CanvasRenderingContext2D, imSrc: string) {
    console.log("I will drawing canvas");
    let img = new Image();
    // const ctx = canvas.getContext('2d');
    img.onload = function () {
        ctx!.drawImage(img, 0, 0); // Or at whatever offset you like
    };
    img.setAttribute('crossOrigin', 'anonymous');
    img.src = imSrc;
}

export function toDataUrlCanvas(canvas: HTMLCanvasElement): string {
    return canvas.toDataURL();
}