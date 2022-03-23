import { ImagePaintingState } from '../types/states/canvasState';
import { RedoUndoAction } from '../types/actions/index';
import { RedoUndoActionEnum } from '../types/index';
import { InitialImagePaintingData } from '../services/initialStateCanvas';
export const redoUndoReducer = (state: ImagePaintingState = InitialImagePaintingData, action: RedoUndoAction): ImagePaintingState => {
    switch (action.type) {
        case RedoUndoActionEnum.UNDO:
            // console.log("Length Undo ", state.undoImSrc?.pop());
            // const tempString: string = action.imSrc;
            return {
                ...state,
                redoImSrc: [...state.redoImSrc as string[], state.imSrc],
                imSrc: state!.undoImSrc!.pop()  as string,
                
                

            }
        case RedoUndoActionEnum.REDO:
            return {
                ...state,
                imSrc: state.redoImSrc?.pop() as string,
                undoImSrc: [...state.undoImSrc as string[], state.imSrc],
                
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