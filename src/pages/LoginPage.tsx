import React, { Fragment } from "react";
import Form from "../components/Forms";
import { LoginState } from "../types";

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
                <Form type="Login"></Form>
            }
        </Fragment>
    )
}

export default LoginPage;