import "./assets/css/machine.css";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from './epics';
import { rootReducer } from './reducers';
import Machine from './containers/machine/Machine';

const epicMiddleware = createEpicMiddleware(rootEpic);

/**
 * The redux state store, built with the Epic middleware.
 */
const store = createStore(
  rootReducer,
  applyMiddleware(epicMiddleware)
);

ReactDOM.render(
  <Provider store={store}>
    <Machine/>
  </Provider>,
  document.getElementById("root")
)