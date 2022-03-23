import { ImagePaintingState } from '../types/states/canvasState';
import { RedoUndoAction } from '../types/actions/index';
import { RedoUndoActionEnum } from '../types/index';
import { InitialImagePaintingData } from '../services/initialStateCanvas';
export const redoUndoReducer = (state: ImagePaintingState = InitialImagePaintingData, action: RedoUndoAction): ImagePaintingState => {
    switch (action.type) {
        case RedoUndoActionEnum.UNDO:
            console.log("Length Undo ", state.undoImSrc?.pop());
            // const tempString: string = action.imSrc;
            return {
                ...state,
                redoImSrc: [...state.redoImSrc as string[], action.imSrc],
                imSrc: state.undoImSrc?.pop() ?? '',

            }
        case RedoUndoActionEnum.REDO:
            return {
                ...state,
                undoImSrc: [...state.undoImSrc as string[], action.imSrc],
                imSrc: state.redoImSrc?.pop() as string
            }
        case RedoUndoActionEnum.CURRENT_STATE:
            return {
                ...state,
                imSrc: action.imSrc,
                undoImSrc: [...state.undoImSrc as string[], action.imSrc]
            }
        default:
            return state;
    }
}