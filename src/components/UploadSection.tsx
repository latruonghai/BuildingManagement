import React, { Fragment, useRef } from "react";
import "../assets/style/components/_upload.scss";
import classNames from "classnames";
import Input from './Input';
import Button from "./Button";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../reducers/index';
import { uploadImageAction } from "../actions";
import { ReactComponentSelectionEnum, UploadImageSectionActionEnum } from '../types/index';
import { saveUploadedImage } from '../services/saveUploadedImage';
import { initialApartmentRequest } from '../services/initialStateCanvas';
import { getRandomStringNameImage } from '../utils/handleString';
import { reactComponentSelectionAction } from "../actions/elementReactAction";
import { fetchDataApartment } from "../utils/requestHandle";


// Todo:
/**
    [x] Add Save changes button (upload to server)
    BUG: Can't upload image to server with name and name file
 */
const UploadSection = (props: any) => {

    const uploadFile = useSelector((state: RootState) => state.uploadReducer);
    const buildingId = useSelector((state: RootState) => state.toggleModalReducer.idSelector);
    const dispatch = useDispatch();
    // const currentImageRef = useRef(null);
    const onChangeHandleInput = (e: any) => {
        let file = e.target.files[0];

        let reader = new FileReader();
        reader.onload = function () {
            let base64String = reader.result as string;

            // base64String = base64String.replace()
            // document.querySelector("#upload-image-section-view")!.setAttribute("src", base64String);
            const name_of_apartment = prompt("Enter name of apartment");
            dispatch(uploadImageAction(UploadImageSectionActionEnum.UPLOAD_IMAGE_SECTION, {
                imgSrc: base64String,
                name: name_of_apartment as string

            }));
        }
        file && reader.readAsDataURL(file);

    }

    const onSaveButton = () => {
        saveUploadedImage(initialApartmentRequest,
            {
                buildingId: buildingId,
                imagePath: getRandomStringNameImage(),
                imageByteString: uploadFile.imgSrc,
                name: uploadFile.name
            });
        dispatch(reactComponentSelectionAction(ReactComponentSelectionEnum.SLIDE_SHOW))
        // 
        // fetchDataApartment(buildingId as number, dispatch);
    }

    return (
        <Fragment>
            <div className="upload-section">
                <div className={classNames("upload-handle-section",
                    {
                        "image-uploaded": uploadFile,
                        "image-normal": !uploadFile,
                    }
                )}>
                    <Input type="file" acceptFile="image/jpeg, image/png"
                        tabIndex={-1} style={{ display: "none" }} handleCallback={onChangeHandleInput} />
                    {uploadFile.imgSrc ?
                        <div className="fragment-upload">
                            {/* <input ref={inputRef as any}
                                    defaultValue={uploadFile.name} id="apartment-title"
                                    className=" m-1 rounded-xl text-center focus:border-blue-500 hover:bg-red-100 select-all border-none"
                                    type="text"
                                        /> */}
                            <h2 className="text-red-600 font-bold">{uploadFile.name}</h2>
                            <img id="upload-image-section-view" className="w-full h-full object-contain" alt="" src={uploadFile.imgSrc} />
                        </div> : <p>Tải lên hình ảnh</p>}
                </div>
                <div className="btn-section items-center">
                    <Button onClickHandler={onSaveButton} contentButton="Save" classNameStyle="m-2" />
                    <Button contentButton="Delete" classNameStyle="delete" onClickHandler={
                        () => {
                            dispatch(uploadImageAction(UploadImageSectionActionEnum.DELETE_IMAGE_SECTION));
                        }
                    } />
                </div>
            </div>
        </Fragment>
    )
}

export default UploadSection;