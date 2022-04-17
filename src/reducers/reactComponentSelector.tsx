// import { Fragment } from 'react';
import { ReactComponentSelectionAction } from '../types/actions/index';
import { ReactComponentElement } from '../types/states';
import { ReactComponentSelectionEnum } from '../types/index';
import Empty from '../components/Empty';
export const reactComponentSelectorReducer = (
    state: ReactComponentElement = { element: <Empty />, typeName: '' },
    action: ReactComponentSelectionAction
): ReactComponentElement => {
    switch (action.type) {
        case ReactComponentSelectionEnum.SLIDE_SHOW:
            return {
                ...state,
                element: action.element,
                typeName: action.type
            };
        case ReactComponentSelectionEnum.UPLOAD_VIEW:
            return {
                ...state,
                element: action.element,
                typeName: action.type
            };
        case ReactComponentSelectionEnum.TABLE_VIEW:
            return {
                ...state,
                element: action.element,
                typeName: action.type
            };
        default:
            return state;
    }
};
