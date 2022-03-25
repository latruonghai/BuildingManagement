import { LoginAction } from '../types/index';
import { ImageViewAction, ToggleAction, SlideshowAction, CanvasActionEnum, RedoUndoActionEnum, BasicActionEnum, ImageHandleActionEnum, ReactComponentSelectionEnum } from '../types/index';
import { BuildingImageViewAction, ImageSlideShowState, ImageSlideShowType } from '../types/states/imageState';
import { BasicButtonAction } from '../types/basicType';
import { SlideShowAction, CanvasAction, RedoUndoAction, ImageSlideShowAction, ReactComponentSelectionAction } from '../types/actions/index';
import { toDataUrlCanvas } from '../utils/handleJsxElement';
import Slideshow from '../components/Slideshow';

export const login = () => {
    return {
        type: LoginAction.LOGIN
    }
}
export const logout = () => {
    return {
        type: LoginAction.LOGOUT
    }
}

export const viewImage = (idData: number): BuildingImageViewAction => {
    return {
        type: ImageViewAction.VIEW_IMAGE,
        idData,
    }
}

export const toggleModal = (): BasicButtonAction => {
    return {
        type: ToggleAction.TOGGLE
    }
}

export const slideShowOrder = (index: number, slideOfSlideShow: number): SlideShowAction => {
    return {
        type: index === 1 ? SlideshowAction.NEXT : index === -1 ? SlideshowAction.PREVIOUS : SlideshowAction.EXACTINDEX,
        sizeOfSlideShow: slideOfSlideShow,
        selectedIndex: index
    }
}

export const canvasActions = (type: string, state: any): CanvasAction | any => {
    switch (type) {
        case CanvasActionEnum.SET_IS_DRAWING:
            return {
                type: CanvasActionEnum.SET_IS_DRAWING,
                isDrawing: state
            }
        case CanvasActionEnum.SET_LINE_WIDTH:
            return {
                type: CanvasActionEnum.SET_LINE_WIDTH,
                lineWidth: state
            }
        case CanvasActionEnum.SET_LINE_COLOR:
            return {
                type: CanvasActionEnum.SET_LINE_COLOR,
                lineColor: state
            }
        case CanvasActionEnum.SET_OPACITY:
            return {
                type: CanvasActionEnum.SET_OPACITY,
                lineOpacity: state
            }
        case CanvasActionEnum.SET_IS_SHOWING:
            return {
                type: CanvasActionEnum.SET_IS_SHOWING,
                isShowing: state
            }
    }
}
export const redoUndoAction = (type: string, state?: HTMLCanvasElement): RedoUndoAction => {
    let currentElement;
    if (state) { currentElement = toDataUrlCanvas(state as HTMLCanvasElement); console.log("To Data") }
    switch (type) {
        case RedoUndoActionEnum.REDO:
            return {
                type: RedoUndoActionEnum.REDO,
                // currentCanvasElement: state as CanvasRenderingContext2D
            }
        case RedoUndoActionEnum.UNDO:
            return {
                type: RedoUndoActionEnum.UNDO,
                // currentCanvasElement: state as CanvasRenderingContext2D
            }
        case RedoUndoActionEnum.CURRENT_STATE:
            // console.log("State is", state);
            // console.log("Undo is ", stat);"
            return {
                type: RedoUndoActionEnum.CURRENT_STATE,
                currentCanvasElement: currentElement
            }
        default:
            return {
                type: BasicActionEnum.DO_NOTHING,
                // currentCanvasElement: state as CanvasRenderingContext2D
            }
    }
}

export const slideShowImageHandleAction = (type: string, state?: ImageSlideShowType): ImageSlideShowAction => {
    switch (type) {
        case ImageHandleActionEnum.UPLOAD:
            return {
                type: ImageHandleActionEnum.UPLOAD,
                imageData: state?.imageData
            }
        case ImageHandleActionEnum.DELETE:
            return {
                type: ImageHandleActionEnum.DELETE,
                imageData: state?.imageData
            }
        case ImageHandleActionEnum.UPDATE:
            return {
                type: ImageHandleActionEnum.UPDATE,
                imageData: state?.imageData
            }
        case ImageHandleActionEnum.GET_ALL_IMAGES:
            return {
                type: ImageHandleActionEnum.GET_ALL_IMAGES,
                imageDataArray: state?.imageDataArray
            }
        default:
            return {
                type: BasicActionEnum.DO_NOTHING,
                // currentCanvasElement: state as CanvasRenderingContext2D
            }
    }
}


