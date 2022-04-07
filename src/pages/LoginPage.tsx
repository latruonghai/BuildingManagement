import React, { Fragment } from "react";
import LoginForm from '../components/LoginForms';

/**
 * 
TODO: Handling the login form
[x] Add Username and Password
[ ] Remember me problem
[ ] Register button
[x] Logout button
BUG 
[x]: Unknown handling authenticator error headers.

BUG
[ ]: state login is ambiguous.
HACK
[ ]: use a stateless component for the login form.
[ ]: use React-router.

 */

const LoginPage = (props: any) => {
    return (
        <Fragment>
            {

                <LoginForm></LoginForm>
            }
        </Fragment>
    )
}

export default LoginPage;