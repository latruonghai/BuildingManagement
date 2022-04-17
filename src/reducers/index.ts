import { combineReducers } from 'redux';
import { viewImageReducer } from './buildingImageSectionAction';
import { toggleModalReducer } from './toggleModalReducer';
import { slideShowReducer } from './slideshowReducer';
import { canvasReducer } from './canvasReducer';
import { imageMethodReducer } from './imageMethodReducer';
import { reactComponentSelectorReducer } from './reactComponentSelector';
import { imageViewReducer } from './imageViewReducer';
import { uploadReducer } from './uploadReducer';
import { onChangeInputReducer } from './onChangeInputReducer';
import { toggleFormReducer } from './toggleFormReducer';
import { loginReducer } from './loginReducer';

// Todo: add new more reducers here
/**
    [x] Add reducers handle upload image changes
 */
const rootReducer = combineReducers({
    viewImageReducer: viewImageReducer,
    toggleModalReducer: toggleModalReducer,
    slideshowReducer: slideShowReducer,
    canvasReducer: canvasReducer,
    // redoUndoReducer: redoUndoReducer,
    imageMethodReducer: imageMethodReducer,
    reactComponentSelectorReducer: reactComponentSelectorReducer,
    imageViewReducer: imageViewReducer,
    uploadReducer: uploadReducer,
    onChangeInputReducer: onChangeInputReducer,
    toggleFormReducer: toggleFormReducer,
    loginReducer: loginReducer
});
export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
