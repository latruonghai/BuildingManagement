import React, {Fragment} from "react";
import "../assets/style/components/_navbar.scss";
import { LoginActionEnum, LogoStyle } from "../types";

import { CategoricalList } from "../types";
import { NavBarProps, ButtonProps } from '../types/props/index';
import Button from "./Button";
import { useDispatch } from "react-redux";
import { loginHandler } from '../actions/index';
import { useNavigate } from "react-router-dom";
// import React from "react";


const Navbar = (props: NavBarProps) =>{
    const dispatch = useDispatch();
    return (
        <Fragment>
            <nav className="navbar-section">
                <div className="navbar-section-container">
                    <NavLogo logo={props.logo} title={props.title} />
                    <ButtonToggle contentButton={props.contentButton}/>
                    <NavItems items={props.items}/>
                    <Button classNameStyle="logout" contentButton={"Logout"} onClickHandler={
                        ()=>{
                                
                                dispatch(loginHandler(LoginActionEnum.LOGGED_OUT, ""));
                        }
                    } />
                </div>
            </nav>
        </Fragment>
    )
}

const NavLogo = ({logo, title}: LogoStyle)=>{
    let navigate = useNavigate();
    return(
        <Fragment>
            <a className="logo-section cursor-pointer">
                <img className="logo-section-image" src={logo} alt="TMA" onClick={
                    ()=>{
                        return navigate("/");
                    }
                } />
                <span className="logo-section-title">{title}</span>
            </a>
        </Fragment>
    )
}

const ButtonToggle = (props:ButtonProps) =>{
    return(
        <Fragment>
            <button type="button" className="button-toggle" aria-controls="mobile-menu-2" aria-expanded="false" 
            data-collapse-toggle="mobile-menu">
                <span className="button-span-title">{props.contentButton}</span>
                <svg className="button-svg-img" fill="currentColor" 
                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" 
                        clipRule="evenodd"></path>
                </svg>
                <svg className="button-hidden-svg" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path  fillRule="evenodd" 
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" 
                                clipRule="evenodd">
                    </path>
                </svg>
            </button>
        </Fragment>
    )
}

const NavItems = (props:CategoricalList) =>{
    return(
        <Fragment>
            <div className="menu-mobile" id="mobile-menu">
                <ul className="menu-items">
                    {
                        props.items.map((item, index) => {
                            if(index ===0){
                                return(
                                    <li key={index}>
                                        <a href={`${item.toLowerCase()}`} className="menu-item selected">{item}</a>
                                    </li>
                                )
                            }
                            else{
                                return(
                                    <li key={index}>
                                        <a href={`${item.toLowerCase()}`} className="menu-item unselected" >{item}</a>
                                    </li>
                                )
                            }
                        })
                    }
                </ul>
            </div>
        </Fragment>
    )
}
export default Navbar;