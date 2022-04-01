import React, { Fragment, useEffect } from 'react';
import logo from './logo.svg';
import './App.scss';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/Homepage';
import { loginHandle, requestBuilding } from './utils/requestHandle';
// import LoginAction from './types/index';

function App(props: any) {
  useEffect(
    ()=> {
      loginHandle();
      // requestBuilding();
    }
     ,[]
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