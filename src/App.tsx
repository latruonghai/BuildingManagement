import React, { Fragment, useEffect } from 'react';
import logo from './logo.svg';
import './App.scss';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/Homepage';
import { loginHandle, requestBuilding } from './utils/requestHandle';
// import LoginAction from './types/index';

function App(props: any) {
  useEffect(
    () => {
      var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsYW1pbmhoaWV1IiwiYXV0aG9yaXRpZXMiOlt7ImF1dGhvcml0eSI6ImltYWdlOnJlYWQifSx7ImF1dGhvcml0eSI6IlJPTEVfVVNFUiJ9XSwiaWF0IjoxNjQ4NjEzMTc0LCJleHAiOjE2NDk4MjI3NzR9.C7P-VPmR-cRaKW2UElAWOidHDdg7L7GhZBNZFewzfPgn-auUbYK8d_M9cyq9dPCx1SW2AM34Rv1y95McwCENLw");
// myHeaders.append("Access-Control-Allow-Origin", "*");
// myHeaders.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

var raw = "";

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  mode: "cors"
};

fetch(" http://d53c-14-186-218-26.au.ngrok.io/api/building/getAll", requestOptions as  RequestInit)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
    }, []
  )
  return (
    <Fragment>
      {
        props.isLoggin ? <LoginPage type="login" isLogin={true}></LoginPage>
          : <HomePage />
      }
    </Fragment>
  );
}

export default App;