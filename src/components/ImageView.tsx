import React, { FC, Fragment } from "react";
import "../assets/style/components/_imageView.scss";
import { ImageViewProps, ImageSectionComponentProps } from '../types/props/index';
import Button from "./Button";
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'react';
import { ImageSlideShowAction } from '../types/actions/index';
import { toggleModal } from '../actions/index';
import { ReactComponentSelectionEnum } from '../types/index';
import { getImageSlideShowStateDataAction } from '../utils/handleArray';
import { slideShowData } from '../assets/static/StaticData';
import { ImageSlideShowType } from '../types/states/imageState';
import { reactComponentSelectionAction } from '../actions/elementReactAction';
import useFetchBuilding from '../hooks/useFetchBuilding';
import { RootState } from '../reducers/index';
import { getIndexFromIdName } from '../utils/handleString';
import imageAdd from "../assets/static/images/image_add_button.png";

/**
 * 
[x] Create section for adding new apartment in building.
[x] Handle delete and add apartment action.
 */
const ImageView: FC<ImageViewProps> = (props: ImageViewProps) => {
    // console.log(imageDetailView.imageString);
    const imageStateArray = useSelector((state: RootState) => state.imageViewReducer);
    useFetchBuilding();
    return (
        <Fragment>
            <div className="image-view-section">
                {
                    imageStateArray.map((imageSection, index) => {
                        return (
                            <ImageSection idImage={imageSection.idData} key={index}
                                imgDescription={imageSection.title as string}
                                imSrc={imageSection.imSrc as string} haveButton={true}  imageDataSlideShowArray= {slideShowData}/>
                        )
                    })
                }
                <ImageSection imgDescription="" key={imageStateArray.length} idImage={imageStateArray.length}
                    imSrc={imageAdd}/>
            </div>

        </Fragment>
    )
}

export const ImageSection: FC<ImageSectionComponentProps> = (props: ImageSectionComponentProps) => {

    const dispatch = useDispatch<Dispatch<ImageSlideShowAction>>();

    const imageDataSlideShow: ImageSlideShowType  = getImageSlideShowStateDataAction({}, 
        props.imageDataSlideShowArray);

    const handleClickSection = (ev:any) => {
        console.log("Target", ev.target.id);
        console.log("Do view", imageDataSlideShow)
        dispatch(toggleModal(getIndexFromIdName(ev.target.id)));
        dispatch(reactComponentSelectionAction(ReactComponentSelectionEnum.SLIDE_SHOW));
        // dispatch(slideShowImageHandleAction(ImageHandleActionEnum.GET_ALL_IMAGES, imageDataSlideShow ))
    }

    return (
        <Fragment>
            <div key={props.idImage} id={`building-${props.idImage}`} data-modal-toggle="defaultModal" className="image-item" >
                <h1 className="image-item-description">{props.imgDescription}</h1>
                <img className="image-item-single" src={props.imSrc} alt={props.imgDescription} onClick={handleClickSection}  />
                {props.haveButton && <Button id_name={`button-view-${props.idImage}`}  classNameStyle="btn view mx-1" type="button" 
                contentButton="View" onClickHandler={handleClickSection} ></Button>}
            </div>
        </Fragment >
    )
}

export default ImageView;