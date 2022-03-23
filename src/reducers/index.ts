import { combineReducers } from "redux";
import { viewImageReducer } from './buildingImageSectionAction';
import { toggleModalReducer } from './toggleModalReducer';
import { slideShowReducer } from './slideshowReducer';
import { canvasReducer } from './canvasReducer';
import { redoUndoReducer } from './redoUndoReducer';

const rootReducer = combineReducers({
    viewImageReducer: viewImageReducer,
    toggleModalReducer: toggleModalReducer,
    slideshowReducer: slideShowReducer,
    canvasReducer: canvasReducer,
    redoUndoReducer: redoUndoReducer
});
export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>