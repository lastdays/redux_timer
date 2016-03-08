import React from 'react';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';

export let createStore = initialCreateStore;

if (__DEV__) {
  createStore = compose(
    require('redux-devtools').devTools(),
    require('redux-devtools').persistState(
      window.location.href.match(/[?&]debug_session=([^&]+)\b/)
    ),
    createStore
  );
}

export function renderDevTools(store) {
  if (__DEV__) {
    return (
      <LogMonitor />
    );
  }
  return null;
}