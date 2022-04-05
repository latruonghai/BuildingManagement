// import { combineReducers } from "redux";
import { ImageViewActionEnum } from '../types/index';
import { BuildingImageViewAction, BuildingImageState } from '../types/states/imageState';
import { buildingImageState } from '../services/buildingImageState';
import { imageViewData } from "../assets/static/StaticData";
import { getInformationFromArray } from '../utils/handleArray';

export const viewImageReducer = (state: BuildingImageState = buildingImageState, action: BuildingImageViewAction) => {
    switch (action.type) {
        case ImageViewActionEnum.VIEW_IMAGE:
            const { idData, imageString, name }: BuildingImageState = getInformationFromArray(imageViewData, action.idData as number);

            return {
                ...state,
                idData: idData,
                imageString: imageString,
                name: name,
            }
        default:
            return state;
    }
}

