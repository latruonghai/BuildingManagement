
import { BuildingImageState } from '../types/states/imageState';
import { ImageSectionProps } from '../types/props/index';

export const getInformationFromArray = (array: ImageSectionProps[], index: number): BuildingImageState => {
    const { imgDescription, imSrc }: ImageSectionProps = array[index];
    const [imageString, name, idData] = [imSrc, imgDescription, index];
    return {
        imageString: imageString,
        name: name,
        idData: idData,
    }
}