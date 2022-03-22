import { ToggleAction } from '../types/index';
import { BasicAction } from '../types/basicType';
export const toggleModalReducer = (state: boolean = false, action: BasicAction) => {
    switch (action.type) {
        case ToggleAction.TOGGLE:
            return !state;
        default:
            return state;
    }
}
