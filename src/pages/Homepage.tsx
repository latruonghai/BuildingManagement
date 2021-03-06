import React, { Fragment } from 'react';
import Navbar from '../components/Navbar';
import { categoriesData, inputValueArray } from '../assets/static/StaticData';
// import logo from "../logo.svg";
import logo from '../assets/static/images/download.png';
import { useSelector } from 'react-redux';
import { RootState } from '../reducers';
import Canvas from '../components/Canvas';
import Modal from '../components/Modal';
import ImageView from '../components/ImageView';
import { useToggleSlideShowModal } from '../hooks/useToggle';
// import { FormProps } from '../types/props/index';
import FormInput from '../components/FormInput';
import useFetchBuilding from '../hooks/useFetchBuilding';
import { checkIsLoggin } from '../utils/handleString';

const HomePage = (props: any) => {
    const isShowing = useSelector(
        (state: RootState) => state.toggleModalReducer
    );
    const { toggleSlideShowModal } = useToggleSlideShowModal();
    const token = useSelector((state: RootState) => state.loginReducer.token);
    const contentBodyModal = useSelector(
        (state: RootState) => state.viewImageReducer
    );
    const reactComponentState = useSelector(
        (state: RootState) => state.reactComponentSelectorReducer
    );
    const editorImageState = useSelector(
        (state: RootState) => state.canvasReducer
    );
    const imageIndex = useSelector(
        (state: RootState) => state.slideshowReducer
    );
    const imageSlideshowState = useSelector(
        (state: RootState) => state.imageMethodReducer
    );
    const isFormShowing = useSelector(
        (state: RootState) => state.toggleFormReducer
    );
    const imageStateArray = useSelector(
        (state: RootState) => state.imageViewReducer
    );
    //
    useFetchBuilding();
    // const isCanvasShowwing = useSelector((state: RootState) => state.canvasReducer.isShowing);
    return checkIsLoggin(token as string) ? (
        <Fragment>
            <Navbar
                logo={logo}
                title="TMA Solutions"
                contentButton="Open main menu"
                items={categoriesData}
            />
            <ImageView imageSections={imageStateArray} />
            <Modal
                isShowing={isShowing.toggle}
                toggle={toggleSlideShowModal}
                class_name="Information "
                bodyContent={contentBodyModal}
                typeName={reactComponentState.typeName}>
                {reactComponentState.element}
            </Modal>

            <Canvas
                isShowing={editorImageState.isShowing}
                imgData={
                    imageSlideshowState.imageDataArray[imageIndex as number]
                }
            />
            <FormInput
                inputArray={inputValueArray}
                isFormShowing={isFormShowing}></FormInput>
        </Fragment>
    ) : (
        <div></div>
    );
};

export default HomePage;
