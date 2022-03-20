import React, { Fragment } from "react";
import Form from "../components/Forms";
import { LoginState } from "../types";
const LoginPage = (props: LoginState) =>{
    return (
        <div>
            {
                props.isLogin && 
                <Form type="Login"></Form>
            }
        </div>
    )
}

const LoginForm = (props:any) =>{
    return (
        <Fragment>
            
        </Fragment>
    )
}
export default LoginPage;