import React, { Dispatch, Fragment } from "react";
import { createPortal } from "react-dom";
import "../assets/style/components/_modal.scss"
import Button from './Button';
import { useDispatch, useSelector } from 'react-redux';
import { CanvasAction } from '../types/actions/index';
import { canvasActions, uploadImageAction, slideShowOrder } from '../actions/index';
import { CanvasActionEnum } from "../types";
import { reactComponentSelectionAction } from '../actions/elementReactAction';
import { ReactComponentSelectionEnum, UploadImageSectionActionEnum } from '../types/index';
import { RootState } from "../reducers";
import { ImageDataState } from "../types/states/imageState";
import { fetchData } from "../utils/requestHandle";

// TODO:

/**
    [ ] Change save change image into delete image on slideshow apartment section
    [x] Add handle click event for upload button
 */
const Modal = ({ toggle, isShowing, class_name, bodyContent, children }: any): JSX.Element => {
    const dispatch = useDispatch();
    const selectorId = useSelector((state: RootState) => state.toggleModalReducer);
    // const dispatch = useDispatch();
    const imageSlideShowState: ImageDataState | any= useSelector((state: RootState) => state.imageMethodReducer);
    // console.log("Body", bodyContent);
    return isShowing ? createPortal(
        <Fragment>
            <div className="modal-overlay" aria-hidden="true" aria-modal="true">
                <div className="relative px-4 w-full max-w-2xl h-full md:h-auto overflow-auto"  >
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div className=" flex justify-between items-center px-4 py-3">
                            <h1 className="modal-title">{class_name}
                                <button  className="fas fa-sync relative" onClick={
                                    () => {fetchData(selectorId.idSelector as number, dispatch)
                                }}/>
                            </h1>
                            
                            <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={toggle}>
                                <span aria-hidden="true">&times;</span>
                            </button>

                        </div>
                        <div className="modal-body">
                            {bodyContent
                                ? children

                                : <p>Modal body text goes here.</p>}
                        </div>
                        <div className="modal-footer">
                            <Button contentButton=" Save change" classNameStyle=" fas fa-save btn" type="button" data-dismiss="modal" onClickHandler={
                                () => {dispatch(reactComponentSelectionAction(ReactComponentSelectionEnum.SLIDE_SHOW)) }
                            } />
                            <Button contentButton=" Upload Image" classNameStyle="fas fa-upload" onClickHandler={() => 
                                dispatch(reactComponentSelectionAction(ReactComponentSelectionEnum.UPLOAD_VIEW))} />

                            <Button contentButton=" Edit" classNameStyle=" fas fa-edit edit" type="button" data-dismiss="modal" onClickHandler={
                                () => dispatch(canvasActions(CanvasActionEnum.SET_IS_SHOWING, true))} />
                            <Button contentButton=" Close" classNameStyle="fas fa-times btn decline" type="button" data-dismiss="modal" onClickHandler={
                                () =>{
                                    toggle();
                                    dispatch(uploadImageAction(UploadImageSectionActionEnum.DELETE_IMAGE_SECTION));
                                    dispatch(slideShowOrder(0,0));
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