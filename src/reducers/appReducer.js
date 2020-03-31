// import redux actions constant
import { appActions } from '../constants/actions';

const initialState = {
  loading: false
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case appActions.SET_INITIALIZE_APP:
      return state;
    default:
      return state;
  }
};

export default appReducer;
