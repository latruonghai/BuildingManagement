import React, { Fragment } from "react";
import { LoginState } from "../types";
import LoginForm from '../components/LoginForms';

/**
 * 
TODO: Handling the login form
[x] Add Username and Password
[ ] Remember me problem
[ ] Register button
[ ] Logout button
BUG: Unknown handling authenticator error headers.
 */

const LoginPage = (props: LoginState) => {
    return (
        <Fragment>
            {
                props.isLogin &&
                <LoginForm type="Login"></LoginForm>
            }
        </Fragment>
    )
}

export default LoginPage;