import { SlideshowAction } from '../types/index';
import { SlideShowAction } from '../types/actions/index';
export const slideShowReducer = (
    state: number = 0,
    action: SlideShowAction
) => {
    switch (action.type) {
        case SlideshowAction.NEXT:
            return state < action.sizeOfSlideShow - 1 ? state + 1 : 0;
        case SlideshowAction.PREVIOUS:
            return state > 0 ? state - 1 : action.sizeOfSlideShow - 1;
        case SlideshowAction.EXACTINDEX:
            return action.selectedIndex;
        default:
            return state;
    }
};
