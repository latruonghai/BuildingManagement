import React, {Fragment} from "react";
import "../assets/style/components/_navbar.scss";
import { LogoStyle } from "../types";
import logo from "../logo.svg";
import { CategoricalList } from "../types";


const Navbar = (props: any) =>{
    return (
        <Fragment>
            <nav className="navbar-section">
                <div className="navbar-section-container">
                    <NavLogo logo={logo} title="TMA Solutions" />
                    <ButtonToggle/>
                    <NavItems items={props.items}/>
                </div>
            </nav>
        </Fragment>
    )
}

const NavLogo = ({logo, title}: LogoStyle)=>{
    return(
        <Fragment>
            <a className="logo-section">
                <img className="logo-section-image" src={logo} alt="TMA" />
                <span className="logo-section-title">{title}</span>
            </a>
        </Fragment>
    )
}

const ButtonToggle = (props:any) =>{
    return(
        <Fragment>
            <button type="button" className="button-toggle" aria-controls="mobile-menu-2" aria-expanded="false" 
            data-collapse-toggle="mobile-menu">
                <span className="button-span-title">Open main menu</span>
                <svg className="button-svg-img" fill="currentColor" 
                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" 
                        clipRule="evenodd"></path>
                </svg>
                <svg className="button-hidden-svg" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path   fillRule="evenodd" 
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
                                    <li>
                                        <a href={`${item.toLowerCase()}`} className="menu-item selected">{item}</a>
                                    </li>
                                )
                            }
                            else{
                                return(
                                    <li>
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