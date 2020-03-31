// import external libraries
import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import appReducer from './appReducer';

const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    app: appReducer
  });

export default rootReducer;
