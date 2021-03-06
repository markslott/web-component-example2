import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Contacts from './Contacts';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>

    <Contacts title="My React Contacts" callbackParent={event=>console.log("parent event",event)}></Contacts>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
