import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import Create_Bug from "./components/create_bug";
import Create_Assest from './components/create_assets';
import Connectors from './components/connectors';
import Forgot_Password from './components/forgot_password';
import Forgot_Password_Success from './components/forgot_password_success';
import Organisations from './components/organisations';
import Login from './components/login';
import Settings from './components/settings';
import Signin from './components/signin';
import reducers from './reducers';


const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Signin />
  </Provider>
  , document.querySelector('.redux'));
