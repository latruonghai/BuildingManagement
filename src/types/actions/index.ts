import { BasicButtonAction, BasicComponentElement } from '../basicType';
import { StateCanvas } from '../states/canvasState';
import { ImageData } from '../data/index';
import { ImageSlideShowState, ImageUploadState } from '../states/imageState';
import { ImageViewState } from '../components/ImageViewState';
import { InputState } from '../states/index';
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
export interface UploadAction extends BasicButtonAction, ImageUploadState{

}

export interface InputStateAction extends BasicButtonAction, InputState{
}