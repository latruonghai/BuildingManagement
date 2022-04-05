import React, { Fragment, useEffect } from 'react';
import './App.scss';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/Homepage';
import { login } from './utils/requestHandle';
// import LoginAction from './types/index';
import { useSelector } from 'react-redux';
import { RootState } from './reducers/index';
import { HEADERS } from './services/constant';

function App(props: any) {
  const loginState = useSelector((state: RootState) => state.loginReducer);
  console.log(document.cookie);
  console.log(HEADERS);
  return (
    <Fragment>
      {
        !loginState? <LoginPage type="login" ></LoginPage>
          : <HomePage />
      }
    </Fragment>
  );
}

export default App;