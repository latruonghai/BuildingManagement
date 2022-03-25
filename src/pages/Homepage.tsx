import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
import { categoriesData, imageViewData, slideShowData } from '../assets/static/StaticData';
// import logo from "../logo.svg";
import logo from "../assets/static/images/download.png";
import { useSelector } from "react-redux";
import { RootState } from "../reducers";
import { useDispatch } from "react-redux";
import { toggleModal } from "../actions/index";
import Canvas from "../components/Canvas";
import Modal from "../components/Modal";
import ImageView from "../components/ImageView";
import { useToggleSlideShowModal } from '../hooks/useToggle';
import { reactComponentSelectorReducer } from '../reducers/reactComponentSelector';

const HomePage = (props: any) => {
    const isShowing = useSelector((state: RootState) => state.toggleModalReducer);
    const {toggleSlideShowModal} = useToggleSlideShowModal();
    const contentBodyModal = useSelector((state: RootState) => state.viewImageReducer);
    const reactComponentState = useSelector((state: RootState) => state.reactComponentSelectorReducer);
    const editorImageState = useSelector((state: RootState) => state.canvasReducer);
    const imageIndex = useSelector((state: RootState) => state.slideshowReducer);
    console.log(imageIndex);
    // const isCanvasShowwing = useSelector((state: RootState) => state.canvasReducer.isShowing);
    return (
        <Fragment>
            <Navbar logo={logo} title="TMA Solutions" contentButton="Open main menu" items={categoriesData} />
            <ImageView imageSections={imageViewData} />
            <Modal isShowing={isShowing} toggle={toggleSlideShowModal} class_name="Information"
            bodyContent={contentBodyModal} >
                {reactComponentState.element}
                </Modal>

            <Canvas isShowing={editorImageState.isShowing} imgSrc={slideShowData[imageIndex as number].imSrc} />
        </Fragment>
    )
}



export default HomePage;