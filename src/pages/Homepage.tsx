import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
import { categoriesData, imageViewData } from '../assets/static/StaticData';
import logo from "../logo.svg";
import ImageView from "../components/ImageView";

const HomePage  = (props:any) =>{
    return(
        <Fragment>
            <Navbar logo={logo} title="TMA Solutions" contentButton="Open main menu" items={categoriesData}/>
            <ImageView imageSections={imageViewData}/>
        </Fragment>
    )
}



export default HomePage;