import React, { FC, Fragment } from 'react';
import '../assets/style/components/_imageView.scss';
import {
    ImageViewProps,
    ImageSectionComponentProps
} from '../types/props/index';
import Button from './Button';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'react';
import { ImageSlideShowAction } from '../types/actions/index';
import { toggleModal, toggleFormAction } from '../actions/index';
import {
    ReactComponentSelectionEnum,
    ToggleFormActionEnum
} from '../types/index';
import { slideShowData } from '../assets/static/StaticData';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ImageSlideShowType } from '../types/states/imageState';
import { reactComponentSelectionAction } from '../actions/elementReactAction';
import { getIndexFromIdName } from '../utils/handleString';
import imageAdd from '../assets/static/images/image_add_button.png';
// import { ImageSection } from './ImageView';
import { deleteBuilding, FetchAllBuilding } from '../utils/requestHandle';

/**
 * 
[x] Create section for adding new apartment in building.
[x] Handle delete and add apartment action.
 */
const ImageView: FC<ImageViewProps> = (props: ImageViewProps) => {
    //

    const dispatch = useDispatch<Dispatch<ImageSlideShowAction>>();

    const imageStateArray = props.imageSections;

    return (
        <Fragment>
            <div className="image-view-section">
                {imageStateArray.map((imageSection, index) => {
                    return (
                        <ImageSection
                            idImage={imageSection.idData}
                            key={index}
                            imgDescription={imageSection.title as string}
                            imSrc={imageSection.imSrc as string}
                            haveButton={true}
                            imageDataSlideShowArray={slideShowData}
                            // functionCallBack={handleClickSection}
                        />
                    );
                })}
                <ImageSection
                    imgDescription=""
                    key={imageStateArray.length}
                    idImage={imageStateArray.length}
                    imSrc={imageAdd}
                    functionCallBack={() => {
                        dispatch(
                            toggleFormAction(ToggleFormActionEnum.TOGGLE_FORM)
                        );
                    }}
                />
            </div>
        </Fragment>
    );
};

export const ImageSection: FC<ImageSectionComponentProps> = (
    props: ImageSectionComponentProps
) => {
    const dispatch = useDispatch();
    const handleClickSection = (ev: any) => {
        dispatch(toggleModal(getIndexFromIdName(ev.target.id)));
        dispatch(
            reactComponentSelectionAction(
                ReactComponentSelectionEnum.SLIDE_SHOW
            )
        );
        // dispatch(slideShowImageHandleAction(ImageHandleActionEnum.GET_ALL_IMAGES, imageDataSlideShow ))
    };
    const handleDeleteBuildingImage = (ev: any) => {
        const response = deleteBuilding(getIndexFromIdName(ev.target.id));
        response
            .then((res) => {
                alert('Delete success');
                FetchAllBuilding(dispatch);
            })
            .catch((err) => {
                alert('Delete failed');
            });
    };
    return (
        <Fragment>
            <div
                key={props.idImage}
                id={`building-${props.idImage}`}
                data-modal-toggle="defaultModal"
                className="image-item">
                <h1 className="image-item-description">
                    {props.imgDescription}
                </h1>
                <img
                    className="image-item-single"
                    src={props.imSrc}
                    alt={props.imgDescription}
                    onClick={props.functionCallBack}
                />
                {props.haveButton && (
                    <>
                        <Button
                            id_name={`button-view-${props.idImage}`}
                            classNameStyle="btn view mx-1"
                            type="button"
                            contentButton="View"
                            onClickHandler={handleClickSection}></Button>
                        <Button
                            id_name={`button-del-${props.idImage}`}
                            contentButton={'Delete'}
                            onClickHandler={handleDeleteBuildingImage}
                        />
                    </>
                )}
            </div>
        </Fragment>
    );
};

export default ImageView;
