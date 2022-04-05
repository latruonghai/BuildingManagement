import { ApartmentDataRequest } from '../types/model/requestType';
import { uploadImage } from './uploadImage';
export const saveUploadedImage = (imageRequest: ApartmentDataRequest, referencesData: any) => {
    imageRequest = {
        ...imageRequest,
        id_building: referencesData.buildingId,
        image_path: referencesData.imagePath,
        name: referencesData.name,
        image_bye_string: referencesData.imageByteString,
    }
    // 
    uploadImage(imageRequest);
}