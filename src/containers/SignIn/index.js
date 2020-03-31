// import external libraries
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import custom components
import SignIn from './SignIn';

const mapStateToProps = state => ({
  authLoader: state.auth.authLoader,
  userDetails: state.auth.userDetails,
  showToast: state.auth.showToast,
  toastMessage: state.auth.toastMessage
});

const mapDispatchToProps = dispatch => {
  const reducerActions = {
    // ...AuthActions
  };
  return {
    actions: bindActionCreators(reducerActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
