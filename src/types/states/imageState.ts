import { BasicButtonAction, BasicImageProperties } from '../basicType';

export interface BuildingImageState extends BuildingImageViewAction {
    imageString: string | string[];
    name: string;
}

export interface BuildingImageViewAction extends BasicButtonAction {
    idData: number | null;
}

// export interface ImageState 
export interface ImageSlideShowState extends BasicImageProperties{
    orderInImage?: number;
    ref_id?: number;
}
export interface ImageDataState{
    // imageDataArray: 
    imageDataArray: ImageSlideShowState[];
}
export interface ImageSlideShowType {
    imageDataArray?: ImageSlideShowState[];
    imageData?: ImageSlideShowState;
}

export interface ImageUploadState {
    imgSrc?: string;
    name?: string;
    imageNameFile?: string;
}