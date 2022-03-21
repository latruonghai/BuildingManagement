import { BasicAction, ToggleAction } from '../types/index';
export const toggleModalReducer = (state: boolean= false, action: BasicAction) =>{
    switch(action.type){
        case ToggleAction.TOGGLE:
            return !state;
        default:
            return state;
    }
}
