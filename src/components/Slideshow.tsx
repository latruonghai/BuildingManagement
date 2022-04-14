import React, { Fragment, useEffect } from "react";
import "../assets/style/components/_slideshow.scss"
import { ButtonProps } from '../types/props/index';
import { SlideshowItemProps, DotSlideShowProps } from '../types/components/SlideshowType';
import { showElement } from '../utils/handleJsxElement';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../reducers/index';
import { slideShowOrder } from '../actions/index';
import { getIndexFromIdName } from '../utils/handleString';
import { ImageDataState } from '../types/states/imageState';
import { fetchDataApartment } from "../utils/requestHandle";


// FIXME:  Fix the issue of the slideshow cannot undo the  last slide
/**
 * 
    [ ] Add the ability to undo the last slide
    BUG:  can't refresh the page after upload and edit image
    
 */
const Slideshow = (props: any) => {

    const selectorId = useSelector((state: RootState) => state.toggleModalReducer);
    const dispatch = useDispatch();
    const index = useSelector((state: RootState) => state.slideshowReducer) as number;
    const imageSlideShowState: ImageDataState = useSelector((state: RootState) => state.imageMethodReducer);
    useEffect(() => { fetchDataApartment(selectorId.idSelector as number, dispatch) }, [selectorId.idSelector, dispatch]);

    const numberOfSlideShowItem = imageSlideShowState.imageDataArray.length;


    return (
        <Fragment>
            <div className="slideshow-container">
                {showElement(imageSlideShowState.imageDataArray as any, index)}
                <ButtonSlideshow contentButton="&#10094;" description="prev" classNameStyle="prev" onClickHandler={() => dispatch(slideShowOrder(-1, numberOfSlideShowItem))} />
                <ButtonSlideshow contentButton="&#10095;" description="next" classNameStyle="next" onClickHandler={() => dispatch(slideShowOrder(1, numberOfSlideShowItem))} />

            </div>
            <br />
            <DotSlideShow numberItems={numberOfSlideShowItem} currentItemDot={index} onClickHandler={dispatch}></DotSlideShow>
        </Fragment>
    );
};

const ButtonSlideshow = (props: ButtonProps) => {
    return (
        <Fragment>
            <a className={props.classNameStyle} onClick={props.onClickHandler}>{props.contentButton}</a>
        </Fragment>
    )
}

export const SlideShowItem = (props: SlideshowItemProps) => {
    return (
        <Fragment>
            <div className={"slideshow-item fade" + props?.class_name}>
                <img src={props.imSrc} alt="Apartment Information" className="hover:cursor-pointer" title={props.title}></img>
                <h4>{props.title}</h4>
                <div className="slideshow-item-text">

                </div>
            </div>
        </Fragment>
    )
}
const DotSlideShow = (props: DotSlideShowProps) => {
    let spanItem = [];
    // const refSpan = useRef(null);
    const handleSelectedDot = (event: any) => {
        const selectedId: number = getIndexFromIdName(event.target.id);
        props.onClickHandler(slideShowOrder(selectedId, props.numberItems));
    }
    for (let i = 0; i < props.numberItems; i++) {
        spanItem.push(
            i !== props.currentItemDot
                ? <span id={`dot-${i}`} key={i} className="slideshow-dot-item" onClick={handleSelectedDot}></span>
                : <span id={`dot-${i}`} key={i} className="slideshow-dot-item active-item" onClick={handleSelectedDot} ></span>
        );
    }

    return (
        <Fragment>
            <div className="slideshow-dot">
                {
                    spanItem
                }
            </div>
        </Fragment>
    )
}
export default Slideshow;