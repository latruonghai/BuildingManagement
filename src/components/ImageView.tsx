import React, { FC, Fragment } from "react";
import "../assets/style/components/_imageView.scss";
import { ImageViewProps, ImageSectionComponentProps } from '../types/props/index';
import Button from "./Button";
// import Slideshow from "./Slideshow";
import { useToggleSlideShowModal } from '../hooks/useToggle';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'react';
import { ImageSlideShowAction } from '../types/actions/index';
import { slideShowImageHandleAction } from '../actions/index';
import { ImageHandleActionEnum } from '../types/index';
import { getImageSlideShowStateDataAction } from '../utils/handleArray';
import { slideShowData } from '../assets/static/StaticData';
import { ImageSlideShowType } from '../types/states/imageState';

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
                                imSrc={imageSection.imSrc} haveButton={true}  imageDataSlideShowArray= {slideShowData}/>
                        )
                    })
                }
            </div>

        </Fragment>
    )
}

export const ImageSection: FC<ImageSectionComponentProps> = (props: ImageSectionComponentProps) => {
    // const 
    // const isShowing = useSelector((state: RootState) => state.toggleModalReducer);
    const  {toggleSlideShowModal} = useToggleSlideShowModal();
    const dispatch = useDispatch<Dispatch<ImageSlideShowAction>>();
    // handleView
    // const handleClickSection = () => {
    //     if (isShowing === false) {

    //          props.idImage >= 0 && props.dispatchAction(viewImage(props.idImage));
    //         props.dispatchAction(toggleModal());
    //     }
    //     console.log("End ", isShowing);
    // }
    const imageDataSlideShow: ImageSlideShowType  = getImageSlideShowStateDataAction({}, props.imageDataSlideShowArray);
    const handleClickSection = () => {
        console.log("Do view", imageDataSlideShow)
        toggleSlideShowModal();
        dispatch(slideShowImageHandleAction(ImageHandleActionEnum.GET_ALL_IMAGES, imageDataSlideShow ))
    }
    return (
        <Fragment>
            <div data-modal-toggle="defaultModal" className="image-item" >
                <h1 className="image-item-description">{props.imgDescription}</h1>
                <img className="image-item-single" src={props.imSrc} alt={props.imgDescription} onClick={toggleSlideShowModal}  />
                {props.haveButton && <Button classNameStyle="btn view mx-1" type="button" 
                contentButton="View" onClickHandler={handleClickSection} ></Button>}
            </div>
        </Fragment >
    )
}

export default ImageView;