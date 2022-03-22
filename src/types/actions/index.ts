import { BasicButtonAction } from '../basicType';
import { StateCanvas } from '../states/canvasState';
export interface SlideShowAction extends BasicButtonAction {
    sizeOfSlideShow: number;
    selectedIndex?: number;
}

export interface CanvasAction extends BasicButtonAction, StateCanvas {
}
