import { appActions } from '../constants/actions';

// App actions
export const initializeAppState = () => ({
  type: appActions.INITIALIZE_APP
});

export const setInitializeAppState = () => ({
  type: appActions.SET_INITIALIZE_APP
});
