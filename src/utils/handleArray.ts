
import { BuildingImageState, ImageSlideShowType, ImageSlideShowState } from '../types/states/imageState';
import { ImageSectionProps } from '../types/props/index';
import { ImageSlideShowAction } from '../types/actions/index';

export const getInformationFromArray = (array: ImageSectionProps[], index: number): BuildingImageState => {
    const { imgDescription, imSrc }: ImageSectionProps = array[index];
    const [imageString, name, idData] = [imSrc, imgDescription, index];
    return {
        type: "",
        imageString: imageString,
        name: name,
        idData: idData,
    }
}

export const  getImageSlideShowStateDataAction = (imageData: ImageSlideShowState={}, imageDataArray: ImageSlideShowState[]=[], orderInImage = null):ImageSlideShowType  => {
    return {
        imageData: imageData as ImageSlideShowState,
        imageDataArray: imageDataArray as ImageSlideShowState[]
    }
}