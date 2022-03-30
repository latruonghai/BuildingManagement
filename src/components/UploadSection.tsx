import React, { Fragment } from "react";
import "../assets/style/components/_upload.scss";
import classNames from "classnames";
import Input from './Input';
import { handleImageUpload } from '../utils/handleImage';


// Todo:
/**
    [ ] Add Save changes button (upload to server)
 */
const UploadSection= (props: any) => {
    
    return(
        <Fragment>
            <div className="upload-section">
                <div className={classNames("upload-handle-section", 
                    {
                        "image-upload": false,
                        "image-normal": true,
                    }
                    )}>
                    <Input type="file" acceptFile="image/jpeg, image/png"
                                tabIndex={-1}  style={{display: "none"}} handleCallback={(ev: any) => handleImageUpload(ev)}/>
                </div>
            </div>
        </Fragment>
    )
}

export default UploadSection;