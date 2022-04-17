import { BasicButtonAction } from '../types/basicType';
import { LoginActionEnum } from '../types/index';
import { checkIsLoggin } from '../utils/handleString';
import { LoginAction } from '../types/actions/index';
import { LoginState } from '../types/states/index';
export const loginReducer = (
    state: LoginState = {
        isLogin: checkIsLoggin(document.cookie),
        token: ''
    },
    action: LoginAction
): LoginState => {
    switch (action.type) {
        case LoginActionEnum.LOGGED_IN:
            // document.cookie = `token=${action.token}`;
            return {
                ...state,
                isLogin: checkIsLoggin(document.cookie),
                token: document.cookie as string
            };
        case LoginActionEnum.LOGGED_OUT:
            document.cookie = `token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
            return {
                ...state,
                isLogin: checkIsLoggin(document.cookie),
                token: ''
            };
        default:
            return state;
    }
};
