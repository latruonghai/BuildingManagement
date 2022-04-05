import { BasicComponentElement } from '../basicType';

export interface ReactComponentElement extends BasicComponentElement {
}

export interface ToggleImageViewState {
    toggle: boolean;
    idSelector?: number;
}

export interface InputState {
    value?: string;
    name?: string;
}

export interface BuildingStateForm {
    name: string;
    price: number;
    num_of_rooms: number;
}