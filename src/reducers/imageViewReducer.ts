import { ImageViewAction } from '../types/actions/index';
import { ImageViewState } from '../types/components/ImageViewState';
import { ImageViewHandleActionEnum } from '../types/index';
export const imageViewReducer = (state: ImageViewState[] = [], action: ImageViewAction): ImageViewState[] => {
    switch(action.type){
        case ImageViewHandleActionEnum.FETCH_IMAGE_VIEW_DATA:
            state = action.imageData as ImageViewState[];
            return state;
        default:
            return state;
    }
}