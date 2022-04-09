import { ToggleAction } from '../types/index';
import { ToggleImageViewAction } from '../types/basicType';
import { ToggleImageViewState } from '../types/states/index';
export const toggleModalReducer = (state: ToggleImageViewState = { toggle: false }, action: ToggleImageViewAction): ToggleImageViewState => {
    switch (action.type) {
        case ToggleAction.TOGGLE:
            return {
                ...state,
                toggle: !state.toggle,
                idSelector: action.idSelector
            }
        default:
            return state;
    }
}
