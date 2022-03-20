import React, { FC, Fragment } from "react";
import "../assets/style/components/_imageView.scss";
import { ImageSectionProps, ImageViewProps } from '../types/props/index';

const ImageView: FC<ImageViewProps> = (props: ImageViewProps) =>{
    return(
        <Fragment>
            <div className="image-view-section">
                {
                    props.imageSections.map((imageSection, index) =>{
                        return(
                            <ImageSection imgDescription={imageSection.imgDescription} imSrc={imageSection.imSrc}/>
                        )
                    })
                }
            </div>
        </Fragment>
    )
}

const ImageSection: FC<ImageSectionProps> = (props: ImageSectionProps)=>{
    return(
        <Fragment>
            <div className="image-item">
                    <h1 className="image-item-description">{props.imgDescription}</h1>
                    <img className="image-item-single hover:scale-110" src={props.imSrc} alt="Image" />
            </div>
        </Fragment>
    )
}
export default ImageView;