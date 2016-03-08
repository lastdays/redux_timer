import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Provider } from 'react-redux';

import CounterComponent from './CounterComponent';
import { shoppingListApp } from '../reducers/index.js'
import { click } from '../actions'

export const App = (dispatch, state) => (
  <div>
    <CounterComponent  />
  </div>
)


export default App