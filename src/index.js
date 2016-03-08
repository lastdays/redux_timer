import React from 'react';
import { render } from 'react-dom'
import thunkMiddleware from 'redux-thunk'
import App from './containers/App';
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux';

import { shoppingListApp } from './reducers/index.js'

let store = createStore(shoppingListApp,
                        { counter: { timer: 0.0, status: "STOPPED" }},
                        applyMiddleware(thunkMiddleware));
// console.log(store.getState().counter, " IN APP")

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
