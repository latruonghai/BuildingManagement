import React, { Fragment } from "react";
import "../assets/style/components/_login.scss";
import Button from "./Button";
import { login } from '../utils/requestHandle';
import { useDispatch } from "react-redux";
import { loginHandler } from '../actions/index';
import { LoginActionEnum } from '../types/index';

export default function LoginForm(props: any) {
    const dispatch = useDispatch();
    const onClickHandler = () => {
        const username = (document.getElementById("username") as HTMLInputElement).value;
        const password = (document.getElementById("password") as HTMLInputElement).value;
        // console.log("username, password", username, password);
        const response = login(username, password);

        response.then(
            res => {
                // console.log(res.headers["authorization"]);
                document.cookie = `token=${res.headers["authorization"]}`;
                alert("Authentication success!");
                console.log(document.cookie);
                dispatch(loginHandler(LoginActionEnum.LOGGED_IN, document.cookie));
            }
        ).catch(
            err => {
                alert("Authentication failed!");
            }
        )
    }
     return (
            <Fragment>
                <div className="login-section">
                    <h1 className="login-title">Login</h1>
                    <div className="mb-3">
                        <label className="login-label" htmlFor="username">Username</label>
                        <input className="input-section" name="username" id="username"
                            type="text" placeholder="User name">
                        </input>
                    </div>
                    <div className="mb-6">
                        <label className="login-label" htmlFor="password">Password</label>
                        <input type="password" className="mb-3 input-section" id="password" name="password" placeholder="Password"></input>
                    </div>
                    <Button classNameStyle="btn login w-1/6" contentButton="Submit" onClickHandler={onClickHandler}></Button>
                    {/* <a className="forgot-pass" href="#">
                        Forgot Password?
                    </a> */}
                </div>

            </Fragment>
        )
}