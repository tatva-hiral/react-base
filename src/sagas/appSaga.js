import { takeLatest, put } from 'redux-saga/effects';
import { appActions } from '../constants/actions';
import * as AppActions from '../actions/app';

// Define handlers
function* initializeAppHandler() {
  yield put(AppActions.setInitializeAppState());
}

// Declare watcher
function* initializeAppWatcher() {
  yield takeLatest(appActions.INITIALIZE_APP, initializeAppHandler);
}

export default [initializeAppWatcher];
