import React, { Fragment } from "react";
import { FormProps } from '../types/props/index';
import "../assets/style/components/_form.scss";
import { createPortal } from 'react-dom';

const Form = (props: FormProps) => {
    return props.isFormShowing ?
        createPortal(
            <Fragment>
            <div className="modal-overlay">
                <div className="modal-wrapper">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div className=" flex justify-between items-center px-4 py-3">
                            <div className="modal-header">
                                <h2>{props.title}</h2>
                            </div>
                            <div className="modal-body items-center flex flex-wrap">
                                {props.children}
                            </div>
                            <div className="modal-footer">
                                {props.footerSectionComponent}
                            </div>
                        </div>
                    </div>
                    
                </div>

            </div>
        </Fragment>,
        document.body
        ): <Fragment></Fragment>
}

export default Form;