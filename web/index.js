import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import Root from './containers/Root';
import configureStore from './store/configureStore';

let store = configureStore();

export default function getStore() {
    return store;
}

render(
  <Root store={store} />,
  document.getElementById('root')
);

