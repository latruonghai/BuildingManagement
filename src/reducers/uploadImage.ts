import { ImageSlideShowState } from './../types/states/imageState';
import { ImageHandleActionEnum } from "../types"
import { ImageDataState } from '../types/states/imageState';
import { ImageSlideShowAction } from '../types/actions/index';

export const imageMethodReducer = (state: ImageDataState , action: ImageSlideShowAction): ImageDataState => {
    switch (action.type) {
        case ImageHandleActionEnum.UPDATE:
            delete action.type;
            return {
                ...state,
                imageDataArray: [...state.imageDataArray as ImageSlideShowState[], action]
            }
        case ImageHandleActionEnum.DELETE:
            return{
                ...state,
                imageDataArray: state.imageDataArray.filter((item, index) => index !== action.orderInImage)
            }
        case ImageHandleActionEnum.UPLOAD:
            delete action.type;
            state.imageDataArray[action.orderInImage as number] = action;
            return{
                ...state,
            }
        default:
            return state;

        }
    }