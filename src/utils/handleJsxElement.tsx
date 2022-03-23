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
    img.src = imSrc;
    return img;
}

export function canvasDrawing(canvas: React.MutableRefObject<HTMLCanvasElement>, 
                                                    ctx: React.MutableRefObject<CanvasRenderingContext2D>,
                                                    imSrc: string){
    const canvasEl: HTMLCanvasElement = canvas.current as HTMLCanvasElement;
    const ctxEl: CanvasRenderingContext2D = ctx.current as CanvasRenderingContext2D;
    ctxEl.drawImage(createElement(imSrc), 0, 0, canvasEl.width, canvasEl.height);
}