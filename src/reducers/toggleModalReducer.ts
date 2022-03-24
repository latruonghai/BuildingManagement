import { ToggleAction } from '../types/index';
import { BasicButtonAction } from '../types/basicType';
export const toggleModalReducer = (state: boolean = false, action: BasicButtonAction) => {
    switch (action.type) {
        case ToggleAction.TOGGLE:
            return !state;
        default:
            return state;
    }
}
