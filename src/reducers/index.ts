import { combineReducers } from "redux";
import { viewImageReducer } from './buildingImageSectionAction';
import { toggleModalReducer } from './toggleModalReducer';
import { slideShowReducer } from './slideshowReducer';
import { canvasReducer } from './canvasReducer';
import { redoUndoReducer } from './redoUndoReducer';
import { imageMethodReducer } from './imageMethodReducer';

const rootReducer = combineReducers({
    viewImageReducer: viewImageReducer,
    toggleModalReducer: toggleModalReducer,
    slideshowReducer: slideShowReducer,
    canvasReducer: canvasReducer,
    redoUndoReducer: redoUndoReducer,
    imageMethodReducer: imageMethodReducer
});
export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>