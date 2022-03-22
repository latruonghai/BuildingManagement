import { BasicButtonAction } from '../basicType';

export interface BuildingImageState extends BuildingImageViewAction {
    imageString: string | string[];
    name: string;
}

export interface BuildingImageViewAction extends BasicButtonAction {
    idData: number | null;
}
