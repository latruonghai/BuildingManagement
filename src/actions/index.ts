import { LoginAction } from './../types/index';
import { ImageViewAction, ToggleAction, SlideshowAction, CanvasActionEnum, RedoUndoActionEnum, BasicActionEnum } from '../types/index';
import { BuildingImageViewAction } from '../types/states/imageState';
import { BasicAction, BasicButtonAction } from '../types/basicType';
import { SlideShowAction, CanvasAction, RedoUndoAction } from '../types/actions/index';
import { ImagePaintingState } from '../types/states/canvasState';
import { toDataUrlCanvas } from '../utils/handleJsxElement';

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

export const toggleModal = (): BasicAction => {
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
