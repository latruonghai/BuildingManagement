
import { BuildingImageState, ImageSlideShowType, ImageSlideShowState } from '../types/states/imageState';
import { ImageSectionProps } from '../types/props/index';
import { ImageViewState } from '../types/components/ImageViewState';
import { IMAGE_BUILDING_LINKS, API_URL } from '../services/constant';
import _ from 'lodash';

export const getInformationFromArray = (array: ImageSectionProps[], index: number): BuildingImageState => {
    const { imgDescription, imSrc }: ImageSectionProps = array[index];
    const [imageString, name, idData] = [imSrc, imgDescription, index];
    return {
        type: "",
        imageString: imageString,
        name: name as string,
        idData: idData,
    }
}

export const getImageSlideShowStateDataAction = (imageData: ImageSlideShowState = {}, imageDataArray: ImageSlideShowState[] = [], orderInImage = null): ImageSlideShowType => {
    return {
        imageData: imageData as ImageSlideShowState,
        imageDataArray: imageDataArray as ImageSlideShowState[]
    }
}

export const updateArrayImageView = (imageDataArray: any): ImageViewState[] => {
    const imageDataState: ImageViewState[] = [];
    for (let imageData of imageDataArray) {
        imageDataState.push({
            imSrc: IMAGE_BUILDING_LINKS,
            title: imageData.name,
            idData: imageData.id,
            price: imageData.price,
            num_of_rooms: imageData.num_of_rooms,
        });
    }
    return imageDataState;

}

export const getImageSlideShowApartmentData = (imageDataArray: any): ImageSlideShowState[] => {
    const imageDataState: ImageSlideShowState[] = [];
    console.log("Array", imageDataArray);
    for (let imageData of imageDataArray) {
        imageDataState.push({
            imSrc: _.startsWith(imageData.ImagePath, "/") ? API_URL + imageData.ImagePath : imageData.ImagePath,
            title: imageData.name,
            id: imageData.id,
            ref_id: imageData.IDBuilding
        });
    }
    return imageDataState;
}