import React, { Fragment, useEffect } from 'react';
import './App.scss';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/Homepage';
import { login } from './utils/requestHandle';
// import LoginAction from './types/index';

function App(props: any) {
  useEffect(
    ()=> {
      const response = login("latruonghai", "password");
      response.then(
        res => {
          console.log(res.headers);
        }
      ).catch(
        err => {
          console.log(err);
        }
      )
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