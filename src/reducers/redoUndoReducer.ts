import { ImagePaintingState } from '../types/states/canvasState';
import { RedoUndoAction } from '../types/actions/index';
import { RedoUndoActionEnum } from '../types/index';
import { InitialImagePaintingData } from '../services/initialStateCanvas';
export const redoUndoReducer = (state: ImagePaintingState = InitialImagePaintingData, action: RedoUndoAction): ImagePaintingState => {
    switch (action?.type) {
        case RedoUndoActionEnum.UNDO:
            // console.log("Length Undo ", state.undoImSrc?.pop());
            ;
            // const tempString: string = action.imSrc;
            return {
                ...state,
                redoCurrentCanvas: [...state.redoCurrentCanvas as string[], state!.undoCurrentCanvas!.pop() as string],
                presentCanvasElement: state!.undoCurrentCanvas!.pop() as string,

            }
        case RedoUndoActionEnum.REDO:
            return {
                ...state,
                presentCanvasElement: state.redoCurrentCanvas?.pop() as string,
                undoCurrentCanvas: [...state.undoCurrentCanvas as string[], state.presentCanvasElement],

            }
        case RedoUndoActionEnum.CURRENT_STATE:
            console.log("Last ", state);
            console.log("Current", action.currentCanvasElement);
            console.log("Equals?", state?.undoCurrentCanvas && state?.undoCurrentCanvas[1] as string === action.currentCanvasElement);
            return {
                ...state,
                presentCanvasElement: action?.currentCanvasElement as string,
                undoCurrentCanvas: [...state.undoCurrentCanvas as string[], action?.currentCanvasElement as string],
            }
        default:
            return state;
    }
}