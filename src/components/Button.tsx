import React, { Fragment } from "react";
import "../assets/style/components/_button.scss"
import { ButtonProps } from '../types/props/index';
// import { ButtonAction } from '../types/index';

const Button = (props: ButtonProps) => {

    return (
        <Fragment>
            <button className={"btn " + props.classNameStyle}
                type={props.type} onClick={props.onClickHandler}>{props.contentButton}</button>
        </Fragment>
    )
}

export default Button;