import { UploadAction } from '../types/actions/index';
import { UploadImageSectionActionEnum } from '../types/index';
import { ImageUploadState } from '../types/states/imageState';
import { initiatialUploadState } from '../services/initialStateCanvas';
export const uploadReducer = (state: ImageUploadState = initiatialUploadState, action: UploadAction): ImageUploadState => {
    switch (action.type) {
        case UploadImageSectionActionEnum.UPLOAD_IMAGE_SECTION:
            return {
                ...state,
                imgSrc: action.imgSrc,
                name: action.name,
            }
        case UploadImageSectionActionEnum.DELETE_IMAGE_SECTION:
            return {
                ...state,
                imgSrc: '',
            }
        case UploadImageSectionActionEnum.CHANGE_IMAGE_NAME:
            return {
                ...state,
                name: action.name,
            }
        default:
            return state;
    }
}