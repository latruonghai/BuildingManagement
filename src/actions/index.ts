import { LoginAction, ImageViewHandleActionEnum, ImageViewActionEnum, UploadImageSectionActionEnum } from '../types/index';
import { ToggleAction, SlideshowAction, CanvasActionEnum, RedoUndoActionEnum, BasicActionEnum, ImageHandleActionEnum } from '../types/index';
import { BuildingImageViewAction, ImageSlideShowType, ImageUploadState } from '../types/states/imageState';
import { ToggleImageViewAction, BasicButtonAction } from '../types/basicType';
import { SlideShowAction, CanvasAction, RedoUndoAction, ImageSlideShowAction, ImageViewAction, UploadAction, InputStateAction } from '../types/actions/index';
import { toDataUrlCanvas } from '../utils/handleJsxElement';
import { ImageViewState } from '../types/components/ImageViewState';
import { InputState } from '../types/states/index';

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
        type: ImageViewActionEnum.VIEW_IMAGE,
        idData,
    }
}

export const toggleModal = (state: number): ToggleImageViewAction => {
    return {
        type: ToggleAction.TOGGLE,
        idSelector: state
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

export const getImageFromApiForImageView = (type: string, state?: ImageViewState[]): ImageViewAction => {
    switch (type) {
        case ImageViewHandleActionEnum.FETCH_IMAGE_VIEW_DATA:
            return {
                type: ImageViewHandleActionEnum.FETCH_IMAGE_VIEW_DATA,
                imageData: state,
            }

        default:
            return {
                type: BasicActionEnum.DO_NOTHING,
                // currentCanvasElement: state as CanvasRenderingContext2D
            }
    }
}

export const uploadImageAction = (type: string, state?: ImageUploadState): UploadAction => {
    switch (type) {
        case UploadImageSectionActionEnum.UPLOAD_IMAGE_SECTION:
            return {
                type: UploadImageSectionActionEnum.UPLOAD_IMAGE_SECTION,
                imgSrc: state?.imgSrc,
                name: state?.name,

            }
        case UploadImageSectionActionEnum.DELETE_IMAGE_SECTION:
            return {
                type: UploadImageSectionActionEnum.DELETE_IMAGE_SECTION,
                imgSrc: '',

            }
        case UploadImageSectionActionEnum.CHANGE_IMAGE_NAME:
            return {
                type: UploadImageSectionActionEnum.DELETE_IMAGE_SECTION,
                name: state?.name
            }
        default:
            return {
                type: BasicActionEnum.DO_NOTHING,
            }
    }
}

export const onChangeInputField = (type: string, state?: InputState): InputStateAction => {
    return {
        type: type,
        value: state!.value as string,
        name: state!.name as string
    }
}
export const toggleFormAction = (type: string): BasicButtonAction => {
    return {
        type: type,
    }
}