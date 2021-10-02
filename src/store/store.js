/* eslint-disable no-underscore-dangle */
import "regenerator-runtime/runtime";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "@reducers/";
import rootSaga from "@sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

export default createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

sagaMiddleware.run(rootSaga);
