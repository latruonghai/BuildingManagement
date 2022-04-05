import { InputFormActionEnum } from '../types/index';
import { InputStateAction } from '../types/actions/index';
import { BuildingStateForm } from '../types/states/index';
export const onChangeInputReducer = (state: BuildingStateForm={
    name: '',
    price: 0,
    num_of_rooms: 0
}, action: InputStateAction) => {
    switch (action.type) {
        case InputFormActionEnum.ON_CHANGE:
            return {
                ...state,
                [action.name as string]: action.value,
            }
        default:
            return state;
    }
}