import { ImageSlideShowState } from '../types/states/imageState';
import { updateRequestUser } from '../utils/requestHandle';
// import { updateRequest, updateRequestAdmin } from '../utils/requestHandle';
import { getRandomStringNameImage } from '../utils/handleString';
export const handleUpdateImageButton = (canvas: HTMLCanvasElement, imageData: ImageSlideShowState) =>{
    // const imageData: ImageSlideShowState
    const imageStringBase64 = canvas.toDataURL();
    const IMAGE_REGEX = /([0-9a-zA-Z\._-]+.(png|PNG|gif|GIF|jp[e]?g|JP[E]?G))/
    let imageStringName = imageData.imSrc?.split("/").slice(-1)[0];
    console.log("Image String", imageStringBase64);
    const imageRequest = {
        id_building: imageData.ref_id,
        description: "",
        image_path: IMAGE_REGEX.test(imageStringName as string)? imageStringName: getRandomStringNameImage(),
        image_bye_string: imageStringBase64,
        id: imageData.id,
        name: imageData.title,
    }
    console.log(imageRequest);

    updateRequestUser(imageRequest);
}