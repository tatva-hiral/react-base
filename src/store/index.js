// import external libraries
import { applyMiddleware, createStore, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
// import reducers
import rootReducer from '../reducers/rootReducer';
import rootSaga from '../sagas/rootSaga';

import { history } from '../utils/history';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialState = {};

const middlerware =
  process.env.NODE_ENV === 'development'
    ? [sagaMiddleware, routerMiddleware(history), logger]
    : [sagaMiddleware, routerMiddleware(history)];

const store = createStore(
  rootReducer(history),
  initialState,
  composeEnhancer(applyMiddleware(...middlerware))
);
sagaMiddleware.run(rootSaga);

export default store;
