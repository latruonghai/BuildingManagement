import React, { Fragment } from "react";
import "../assets/style/components/_slideshow.scss"
import { ButtonProps } from '../types/props/index';
import { SlideshowItemProps, DotSlideShowProps } from '../types/components/SlideshowType';
import { showElement } from '../utils/handleJsxElement';
import { slideShowData } from '../assets/static/StaticData';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../reducers/index';
import { slideShowOrder } from '../actions/index';
import { getIndexFromIdName } from '../utils/handleString';

const Slideshow = (props: any) => {
    // const handleSlideShow = event => {
    const index = useSelector((state: RootState) => state.slideshowReducer) as number;
    // }

    const numberOfSlideShowItem = slideShowData.length;
    const dispatch = useDispatch()
    return (
        <Fragment>
            <div className="slideshow-container">
                {showElement(slideShowData, index)}
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
                <img src={props.imSrc} alt=""></img>
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