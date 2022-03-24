import React, { FC, Fragment } from "react";
import "../assets/style/components/_imageView.scss";
import { ImageViewProps, ImageSectionComponentProps } from '../types/props/index';
import Button from "./Button";
// import Slideshow from "./Slideshow";
import { useToggleSlideShowModal } from '../hooks/useToggle';

const ImageView: FC<ImageViewProps> = (props: ImageViewProps) => {
    // console.log(imageDetailView.imageString);

    return (
        <Fragment>
            <div className="image-view-section">
                {
                    props.imageSections.map((imageSection, index) => {
                        return (
                            <ImageSection idImage={index} key={index}
                                imgDescription={imageSection.imgDescription}
                                imSrc={imageSection.imSrc} haveButton={true} />
                        )
                    })
                }
            </div>

        </Fragment>
    )
}

export const ImageSection: FC<ImageSectionComponentProps> = (props: ImageSectionComponentProps | any) => {
    // const 
    // const isShowing = useSelector((state: RootState) => state.toggleModalReducer);
    const  {toggleSlideShowModal} = useToggleSlideShowModal();
    // handleView
    // const handleClickSection = () => {
    //     if (isShowing === false) {

    //          props.idImage >= 0 && props.dispatchAction(viewImage(props.idImage));
    //         props.dispatchAction(toggleModal());
    //     }
    //     console.log("End ", isShowing);
    // }
    return (
        <Fragment>
            <div data-modal-toggle="defaultModal" className="image-item" >
                <h1 className="image-item-description">{props.imgDescription}</h1>
                <img className="image-item-single" src={props.imSrc} alt={props.imgDescription} onClick={toggleSlideShowModal}  />
                {props.haveButton && <Button classNameStyle="btn view mx-1" type="button" 
                contentButton="View" onClickHandler={toggleSlideShowModal} ></Button>}
            </div>
        </Fragment >
    )
}

export default ImageView;