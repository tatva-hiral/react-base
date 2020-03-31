import React from 'react';
// import external libraries
import PropTypes from 'prop-types';
// import services
import { requireValidate, emailValidate } from '../../utils/validations';
import { Path, userType } from '../../constants';
import './styles.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorMessage: {}
    };
  }

  componentDidMount() {
  }

  _validateOnChange = event => {
    event.preventDefault();
    const { errorMessage } = this.state;
    const fieldName = event.target.name;
    let fieldValue = event.target.value;
    if (fieldName === 'email') {
      errorMessage[fieldName] = emailValidate('email address', fieldValue);
      fieldValue = fieldValue.toLowerCase();
    } else if (fieldName === 'password') {
      errorMessage[fieldName] = requireValidate('password', fieldValue);
    }

    this.setState({
      [fieldName]: fieldValue
    });
  };

  _validateBeforeFormSubmit = () => {
    const { email, password, errorMessage } = this.state;
    let isFormValid = true;

    if (!email || email) {
      errorMessage.email = emailValidate('email address', email);
      isFormValid = errorMessage.email.status;
    }
    if (!password || password) {
      errorMessage.password = requireValidate('password', password);
      isFormValid = errorMessage.password.status;
    }
    this.setState({ errorMessage });
    return isFormValid;
  };

  _signInFormSubmit = event => {
    event.preventDefault();
  };

  render() {
    const { email, password, errorMessage } = this.state;
    const { authLoader, showToast, toastMessage } = this.props;
    return (
      <section className="login_area section--padding">
        <div className="container">
          <form name="form" onSubmit={this._signInFormSubmit} className="sign-in-form">
            <div className="login">
              <div className="login--header">
                <h3>SIGN IN</h3>
              </div>
              <div className="login--form">
                {showToast && <div>{toastMessage.message || ''}</div>}
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    name="email"
                    id="email"
                    type="email"
                    value={email}
                    className={`text_field ${
                      errorMessage.email && !errorMessage.email.status ? 'error' : ''
                    }`}
                    placeholder="Email address"
                    onChange={this._validateOnChange}
                    onBlur={this._validateOnChange}
                    autoComplete={'password'}
                  />
                  {errorMessage.email && !errorMessage.email.status && (
                    <span className="input-error">{errorMessage.email.message}</span>
                  )}
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    name="password"
                    id="password"
                    type="password"
                    value={password}
                    className={`text_field ${
                      errorMessage.password && !errorMessage.password.status ? 'error' : ''
                    }`}
                    placeholder="Password"
                    onChange={this._validateOnChange}
                    onBlur={this._validateOnChange}
                    autoComplete={'password'}
                  />
                  {errorMessage.password && !errorMessage.password.status && (
                    <span className="input-error">{errorMessage.password.message}</span>
                  )}
                </div>
                <div className="form-group">
                  <button className="btn btn-primary" type="submit" disabled={authLoader}>
                    <span>Sign In</span>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

SignIn.propTypes = {
  actions: PropTypes.object,
  history: PropTypes.object,
  authLoader: PropTypes.bool,
  showToast: PropTypes.bool,
  toastMessage: PropTypes.object
};

SignIn.defaultProps = {
  authLoader: false,
  showToast: false,
  toastMessage: {}
};

export default SignIn;
