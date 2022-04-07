import React, { useEffect } from 'react';
import './App.scss';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/Homepage';
// import { login } from './utils/requestHandle';
// import LoginAction from './types/index';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './reducers/index';
import { HEADERS } from './services/constant';
import { checkIsLoggin } from './utils/handleString';
// import { Router } from 'react-router-dom';
import {BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { loginHandler } from './actions/index';
import { LoginActionEnum } from './types/index';

function App(props: any) {
  const loginState = useSelector((state: RootState) => state.loginReducer);
  const dispatch = useDispatch();
  console.log(document.cookie);
  console.log(HEADERS);
  useEffect(() => {
    dispatch(loginHandler(LoginActionEnum.LOGGED_IN, document.cookie));
  }, [])
  return (
    // <Fragment>
    //   {
    //     !checkIsLoggin(loginState.token as string)? <LoginPage type="login" ></LoginPage>
    //       : <HomePage />
    //   }
    // </Fragment>
  <BrowserRouter>
    <Routes>
    { !checkIsLoggin(loginState.token as string) ?
      <Route path="/" element={<LoginPage type="login" />} />:
      <Route path="/home" element={<HomePage />} />
    }
    <Route path="*" element={<Navigate to={!checkIsLoggin(loginState.token as string)? "/":"/home"} />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;