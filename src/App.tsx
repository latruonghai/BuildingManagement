import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.scss';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/Homepage';

function App(props:any) {
// console.log("Logo la: ", logo);
return (
  <Fragment>
    {
      props.isLoggin ?<LoginPage type="login" isLogin={true}></LoginPage>
      : <HomePage/>
    }
  </Fragment>
);
}

export default App;