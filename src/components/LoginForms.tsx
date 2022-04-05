import React, { Fragment } from "react";
import { FormComponentBasicProps } from "../types/props";
import "../assets/style/components/_login.scss";
import Button from "./Button";

export default function LoginForm(props: FormComponentBasicProps) {
    if (props.type === "Login") {
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
                        <input className="mb-3 input-section" id="password" name="password" placeholder="Password"></input>
                    </div>
                    <Button classNameStyle="btn login w-1/6" contentButton="Submit"></Button>
                    <a className="forgot-pass" href="#">
                        Forgot Password?
                    </a>
                </div>

            </Fragment>
        )
    }
    else {
        return (
            <Fragment>

            </Fragment>
        )
    }
}