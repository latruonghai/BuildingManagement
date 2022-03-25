import { combineReducers } from "redux";
import { viewImageReducer } from './buildingImageSectionAction';
import { toggleModalReducer } from './toggleModalReducer';
import { slideShowReducer } from './slideshowReducer';
import { canvasReducer } from './canvasReducer';
import { redoUndoReducer } from './redoUndoReducer';
import { imageMethodReducer } from './imageMethodReducer';
import { reactComponentSelectorReducer } from './reactComponentSelector';

// Todo: add new more reducers here
/**
    [ ] Add reducers handle upload image changes
 */
const rootReducer = combineReducers({
    viewImageReducer: viewImageReducer,
    toggleModalReducer: toggleModalReducer,
    slideshowReducer: slideShowReducer,
    canvasReducer: canvasReducer,
    redoUndoReducer: redoUndoReducer,
    imageMethodReducer: imageMethodReducer,
    reactComponentSelectorReducer: reactComponentSelectorReducer
});
export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>