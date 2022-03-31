import { BasicButtonAction, BasicComponentElement } from '../basicType';
import { StateCanvas } from '../states/canvasState';
import { ImageData } from '../data/index';
import { ImageSlideShowState } from '../states/imageState';
import { ImageViewState } from '../components/ImageViewState';
export interface SlideShowAction extends BasicButtonAction {
    sizeOfSlideShow: number;
    selectedIndex?: number;
}

export interface CanvasAction extends BasicButtonAction, StateCanvas {
}
export interface RedoUndoAction extends BasicButtonAction {
    currentCanvasElement?: string;

}

export interface ImageSlideShowAction extends BasicButtonAction{
    imageDataArray?: ImageSlideShowState[],
    imageData?: ImageSlideShowState
}

export interface ReactComponentSelectionAction extends BasicButtonAction, BasicComponentElement {

}
export interface ImageViewAction extends BasicButtonAction{
    imageData?: ImageViewState[];
}
