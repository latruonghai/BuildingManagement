import { combineReducers } from "redux";
import { viewImageReducer } from './buildingImageSectionAction';
import { toggleModalReducer } from './toggleModalReducer';

const rootReducer = combineReducers({
    viewImageReducer: viewImageReducer,
    toggleModalReducer: toggleModalReducer
});
export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>