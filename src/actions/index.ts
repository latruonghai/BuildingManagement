import { LoginAction } from './../types/index';
import { ImageViewAction } from '../types/index';
import { BuildingImageViewAction } from '../types/states/imageState';

export const login = () => {
    return {
        type: LoginAction.LOGIN
    }
}
export const logout = () => {
    return {
        type: LoginAction.LOGOUT
    }
}

export const viewImage = (idData: number, imageString: string, name: string): BuildingImageViewAction => {
    return {
        type: ImageViewAction.VIEW_IMAGE,
        idData,
    }
}