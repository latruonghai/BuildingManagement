import { LoginAction } from './../types/index';
import { ImageViewAction, ToggleAction, BasicAction } from '../types/index';
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

export const viewImage = (idData: number): BuildingImageViewAction => {
    return {
        type: ImageViewAction.VIEW_IMAGE,
        idData,
    }
}

export const toggleModal = (): BasicAction =>{
    return{
        type: ToggleAction.TOGGLE
    }
}