import React, { FC, Fragment, useCallback } from "react";
import "../assets/style/components/_imageView.scss";
import { ImageSectionProps, ImageViewProps, ImageSectionComponentProps } from '../types/props/index';
import Modal from "./Modal";
import { useModal } from '../hooks/useModal';
import Button from "./Button";
import { useSelector } from "react-redux";
// import { viewImageReducer } from '../reducers/buildingImageSectionAction';
import { BuildingImageState } from '../types/states/imageState';
import { RootState } from '../reducers/index';

const ImageView: FC<ImageViewProps> = (props: ImageViewProps) => {
    const { isShowing, toggle } = useModal();
    const imageDetailView = useSelector((state: RootState) => state.viewImageReducer);
    console.log(imageDetailView);

    const handleClickSection = useCallback(
        () => {
            console.log("Begin ", isShowing);
            if (isShowing === false) {
                console.log()
                toggle();
            }
            console.log("End ", isShowing);
        }, [isShowing, toggle]
    )
    return (
        <Fragment>
            <div className="image-view-section">
                {
                    props.imageSections.map((imageSection, index) => {
                        return (
                            <ImageSection idImage={index} handleClick={handleClickSection}
                                key={index} imgDescription={imageSection.imgDescription}
                                imSrc={imageSection.imSrc} haveButton={true} />
                        )
                    })
                }
            </div>
            <Modal isShowing={isShowing} toggle={toggle} name="Information" />
        </Fragment>
    )
}

export const ImageSection: FC<ImageSectionComponentProps> = (props: ImageSectionComponentProps | any) => {

    return (
        <Fragment>
            <div data-modal-toggle="defaultModal" className="image-item" >
                <h1 className="image-item-description">{props.imgDescription}</h1>
                <img className="image-item-single hover:scale-110" src={props.imSrc} alt="Image" />
                {props.haveButton && <Button classNameStyle="btn view mx-1" type="button" onClickHandler={() => props?.handleClick()} contentButton="View"></Button>}
            </div>
        </Fragment >
    )
}

export default ImageView;