import React, { Fragment } from "react";
import { createPortal } from "react-dom";
import { ModalProps } from '../types/components/index';
import "../assets/style/components/_modal.scss"
import Button from './Button';
import { ImageSection } from "./ImageView";

const Modal: any = ({ toggle, isShowing, name, bodyContent }: ModalProps) =>
    isShowing && createPortal(
        <Fragment>
            <div className="modal-overlay" aria-hidden="true" aria-modal="true">
                <div className="relative px-4 w-full max-w-2xl h-full md:h-auto"  >
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div className=" flex justify-between items-center px-4 py-3">
                            <h1 className="modal-title">{name}</h1>
                            <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={toggle}>
                                <span aria-hidden="true">&times;</span>
                            </button>

                        </div>
                        <div className="modal-body">
                            {bodyContent ? <ImageSection imgDescription={bodyContent.name} imSrc={bodyContent.imageString as string} />

                                : <p>Modal body text goes here.</p>}
                        </div>
                        <div className="modal-footer">
                            <Button contentButton="Save change" classNameStyle="btn" type="button" data-dismiss="modal" onClickHandler={toggle} />
                            <Button contentButton="Close" classNameStyle="btn decline" type="button" data-dismiss="modal" onClickHandler={toggle} />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>,
        document.body
    );

export default Modal;