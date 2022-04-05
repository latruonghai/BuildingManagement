// import { Fragment } from 'react';
import { ReactComponentSelectionAction } from '../types/actions/index';
import { ReactComponentElement } from '../types/states';
import { ReactComponentSelectionEnum } from '../types/index';
import Empty from '../components/Empty';
export const reactComponentSelectorReducer = (state: ReactComponentElement = { element: <Empty /> }, action: ReactComponentSelectionAction) => {
    switch (action.type) {
        case ReactComponentSelectionEnum.SLIDE_SHOW:
            return {
                ...state,
                element: action.element
            }
        case ReactComponentSelectionEnum.UPLOAD_VIEW:
            return {
                ...state,
                element: action.element
            }
        case ReactComponentSelectionEnum.TABLE_VIEW:

            return {
                ...state,
                element: action.element
            }
        default:
            return state;
    }
}
