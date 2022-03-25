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
}

export interface ImageDataState{
    // imageDataArray: 
    imageDataArray: ImageSlideShowState[];
}
export interface ImageSlideShowType {
    imageDataArray?: ImageSlideShowState[];
    imageData?: ImageSlideShowState;
}