import { BasicHTMLElement, BasicComponentElement } from '../basicType';

export interface ReactComponentElement extends BasicComponentElement{
}

export interface ToggleImageViewState {
    toggle: boolean;
    idSelector?: number;
}