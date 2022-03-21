import { combineReducers } from "redux";
import { viewImageReducer } from './buildingImageSectionAction';

const rootReducer = combineReducers({
    viewImageReducer: viewImageReducer,
});
export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>