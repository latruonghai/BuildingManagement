import React, { Fragment } from "react";
import Form from "../components/Forms";
import { LoginState } from "../types";
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