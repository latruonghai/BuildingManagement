import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
import categoriesData from "../assets/static/StaticData";

const HomePage  = (props:any) =>{
    return(
        <Fragment>
            <Navbar items={categoriesData}/>
        </Fragment>
    )
}



export default HomePage;