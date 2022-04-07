import React, { Fragment } from "react";
import { createPortal } from "react-dom";
import "../assets/style/components/_modal.scss"
import Button from './Button';
import { useDispatch, useSelector } from 'react-redux';
import { canvasActions, uploadImageAction, slideShowOrder } from '../actions/index';
import { CanvasActionEnum } from "../types";
import { reactComponentSelectionAction } from '../actions/elementReactAction';
import { ReactComponentSelectionEnum, UploadImageSectionActionEnum } from '../types/index';
import { RootState } from "../reducers";
import { ImageDataState } from "../types/states/imageState";
import { fetchDataApartment, delApartmentImageRequest } from '../utils/requestHandle';
import OptionButton from "./OptionButton";
import { optionViewPropertiesArray } from '../types/data/componentProperties';
import UploadSection from "./UploadSection";

// TODO:

/**
    [x] Change save change image into delete image on slideshow apartment section
    [x] Add handle click event for upload button
 */
const Modal = ({ toggle, isShowing, class_name, bodyContent, children, typeName }: any): JSX.Element => {
    const dispatch = useDispatch();
    const selectorId = useSelector((state: RootState) => state.toggleModalReducer);
    // console.log("CHILD", children);
    const imageIndex = useSelector((state: RootState) => state.slideshowReducer);
    // const imageSlideshowState = useSelector((state: RootState) => state.imageMethodReducer);
    // const dispatch = useDispatch();
    const imageSlideShowState: ImageDataState = useSelector((state: RootState) => state.imageMethodReducer);
    // 
    return isShowing ? createPortal(
        <Fragment>
            <div className="modal-overlay" aria-hidden="true" aria-modal="true">
                <div className="modal-wrapper"  >
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div className=" flex justify-between items-center px-4 py-3">
                            <h1 className="modal-title">{class_name}
                                <button className="fas fa-sync relative" onClick={
                                    () => {
                                        fetchDataApartment(selectorId.idSelector as number, dispatch)
                                    }} />
                            </h1>

                            <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={toggle}>
                                <span aria-hidden="true">&times;</span>
                            </button>

                        </div>
                        <div className="modal-body">
                            <OptionButton arrayOptionView={optionViewPropertiesArray(dispatch)} />
                            {bodyContent
                                ? children

                                : <p>Modal body text goes here.</p>}
                        </div>
                        <div className="modal-footer">

                            <Button contentButton=" Upload Image" classNameStyle="fas fa-upload" onClickHandler={() =>
                                dispatch(reactComponentSelectionAction(ReactComponentSelectionEnum.UPLOAD_VIEW))} />

                            {
                                typeName === ReactComponentSelectionEnum.SLIDE_SHOW &&
                                <Fragment>
                                    <Button contentButton=" Edit" classNameStyle=" fas fa-edit edit" type="button" data-dismiss="modal" onClickHandler={
                                        () => dispatch(canvasActions(CanvasActionEnum.SET_IS_SHOWING, true))} />
                                    <Button contentButton=" Delete" classNameStyle=" fas fa-trash delete" type="button" data-dismiss="modal" onClickHandler={
                                        () => {
                                            const index = imageSlideShowState.imageDataArray[imageIndex as number].id;
                                            delApartmentImageRequest(index as number);
                                            // fetchData(selectorId.idSelector as number, dispatch);
                                        }
                                    }
                                    />
                                </Fragment>
                            }
                            <Button contentButton=" Close" classNameStyle="fas fa-times btn decline" type="button" data-dismiss="modal" onClickHandler={
                                () => {
                                    toggle();
                                    dispatch(uploadImageAction(UploadImageSectionActionEnum.DELETE_IMAGE_SECTION));
                                    dispatch(slideShowOrder(0, 0));
                                }
                            } />

                        </div>
                    </div>
                </div>
            </div>
        </Fragment>,
        document.body
    ) : <div></div>;
}

export default Modal;