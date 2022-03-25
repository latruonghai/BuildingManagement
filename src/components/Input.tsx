import React from "react";
import {Fragment} from 'react';
import { InputProps } from '../types/props/index';

const Input = (props:InputProps) =>{
    return(
        <Fragment>
            <input className={props.class_name} type={props.type} placeholder={props.placeholder} 
            onChange={props.handleCallback} accept={props.acceptFile} tabIndex={props.tabIndex}
            autoComplete={props.autoComplete} ></input>
        </Fragment>
    )
}

export default Input;