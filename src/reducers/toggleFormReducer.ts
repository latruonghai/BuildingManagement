import { BasicButtonAction, ToggleFormAction } from '../types/basicType';
import { ToggleFormActionEnum } from '../types/index';
export const toggleFormReducer = (
    state: boolean = false,
    action: BasicButtonAction
): boolean => {
    switch (action.type) {
        case ToggleFormActionEnum.TOGGLE_FORM:
            return true;
        case ToggleFormActionEnum.UNTOGGLE_FORM:
            return false;
        default:
            return state;
    }
};
