import { BasicButtonAction } from '../types/basicType';
import { LoginActionEnum } from '../types/index';
import { checkIsLoggin } from '../utils/handleString';
export const loginReducer = (state: boolean= true, action: BasicButtonAction) => {
    switch (action.type) {
        case LoginActionEnum.LOGIN:
            return checkIsLoggin(document.cookie);
        case LoginActionEnum.LOGOUT:
            return false;
        default:
            return state;
    }
}