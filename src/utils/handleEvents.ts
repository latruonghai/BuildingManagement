import { Dispatch } from 'react';
import { canvasActions, slideShowOrder } from '../actions';
import { CanvasActionEnum } from '../types';
import { getIndexFromIdName } from './handleString';
import { ImageDataState } from '../types/states/imageState';
import { Void } from '../types/index';
import { delApartmentImageRequest, fetchDataApartment } from './requestHandle';

export const onEditTableDataClickHandler = (
    dispatch: Dispatch<any>,
    imageSlideShowState: ImageDataState
): Void => {
    return (ev: any) => {
        const id = ev.target.id;
        const index = getIndexFromIdName(id);
        // dispatch()
        dispatch(canvasActions(CanvasActionEnum.SET_IS_SHOWING, true));
        dispatch(
            slideShowOrder(index, imageSlideShowState.imageDataArray.length)
        );
    };
};

export const onDelTableDataClickHandler = (
    dispatch: Dispatch<any>,
    imageSlideShowState: ImageDataState,
    selectorId: number
): Void => {
    return (ev: any) => {
        // const id = ev.target.id;
        const index = getIndexFromIdName(ev.target.id);

        const image_index =
            imageSlideShowState.imageDataArray[index as number].id;

        delApartmentImageRequest(image_index as number);
        fetchDataApartment(selectorId as number, dispatch);
    };
};
