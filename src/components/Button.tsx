import React, { Fragment } from "react";
import "../assets/style/components/_button.scss"

const Button = (props:any) =>{
    return(
        <Fragment>
            <button className={props.classNameStyle} type="submit" >Submit</button>
        </Fragment>
    )
}

export default Button;