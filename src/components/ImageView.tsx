import React, { FC, Fragment } from "react";
import "../assets/style/components/_imageView.scss";
import { ImageViewProps, ImageSectionComponentProps } from '../types/props/index';
import Modal from "./Modal";
import Button from "./Button";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from '../reducers/index';
import { viewImage, toggleModal } from '../actions/index';
import Canvas from "./Canvas";
// import Slideshow from "./Slideshow";

const ImageView: FC<ImageViewProps> = (props: ImageViewProps) => {
    const isShowing = useSelector((state: RootState) => state.toggleModalReducer);
    const contentBodyModal = useSelector((state: RootState) => state.viewImageReducer);
    const canvasState = useSelector((state: RootState) => state.redoUndoReducer);

    const dispatchAction = useDispatch();
    const toggle = () => dispatchAction(toggleModal());

    // console.log(imageDetailView.imageString);


    return (
        <Fragment>
            <div className="image-view-section">
                {
                    props.imageSections.map((imageSection, index) => {
                        return (
                            <ImageSection idImage={index} key={index}
                                imgDescription={imageSection.imgDescription}
                                imSrc={imageSection.imSrc} haveButton={true} dispatchAction={dispatchAction} />
                        )
                    })
                }
            </div>
            <Modal isShowing={isShowing} toggle={toggle} class_name="Information" bodyContent={contentBodyModal} />

            <Canvas isShowing={true} imgSrc={canvasState.imSrc} />
        </Fragment>
    )
}

export const ImageSection: FC<ImageSectionComponentProps> = (props: ImageSectionComponentProps | any) => {
    // const 
    const isShowing = useSelector((state: RootState) => state.toggleModalReducer);

    const handleClickSection = () => {
        if (isShowing === false) {

            props.idImage >= 0 && props.dispatchAction(viewImage(props.idImage));
            props.dispatchAction(toggleModal());
        }
        console.log("End ", isShowing);
    }
    return (
        <Fragment>
            <div data-modal-toggle="defaultModal" className="image-item" >
                <h1 className="image-item-description">{props.imgDescription}</h1>
                <img className="image-item-single" src={props.imSrc} alt="Image" />
                {props.haveButton && <Button classNameStyle="btn view mx-1" type="button" onClickHandler={handleClickSection} contentButton="View"></Button>}
            </div>
        </Fragment >
    )
}

export default ImageView;