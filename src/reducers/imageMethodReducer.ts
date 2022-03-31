import { ImageSlideShowState } from '../types/states/imageState';
import { ImageHandleActionEnum } from "../types"
import { ImageDataState } from '../types/states/imageState';
import { ImageSlideShowAction } from '../types/actions/index';
import { initialStateForImage } from '../services/initialStateCanvas';

export const imageMethodReducer = (state: ImageDataState  = initialStateForImage, action: ImageSlideShowAction): ImageDataState => {
    switch (action.type) {
        case ImageHandleActionEnum.DELETE:
            return{
                ...state,
                imageDataArray: state.imageDataArray.filter((item, index) => index !==  action?.imageData?.orderInImage as number)
            }
        case ImageHandleActionEnum.UPDATE:
            // delete action.type;
            // const number = 
            state.imageDataArray[action.imageData!.orderInImage as number] = action.imageData as ImageSlideShowState;
            return state;
        case ImageHandleActionEnum.GET_ALL_IMAGES:
            console.log(ImageHandleActionEnum.GET_ALL_IMAGES);
            console.log(action.imageDataArray);
            return {
                ...state,
                imageDataArray: [...action.imageDataArray as ImageSlideShowState[]]
            }
        case ImageHandleActionEnum.UPLOAD:
            return {
                ...state,
                imageDataArray: [...state.imageDataArray, action.imageData as ImageSlideShowState]
            }
        default:
            return state;

        }
    }