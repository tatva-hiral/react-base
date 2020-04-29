import React from 'react';
// import external libraries
import PropTypes from 'prop-types';
import { Route, Redirect, withRouter } from 'react-router-dom';
// import constants
import { Path } from '../constants';

function PrivateRoute(props) {
  const { location, component: Component, ...rest } = props;
  return (
    <Route
      {...rest}
      render={p =>
        localStorage.getItem('token') ? (
          <Component {...p} />
        ) : (
          <Redirect to={{ pathname: Path.Root, state: { from: location } }} />
        )
      }
    />
  );
}

/* initialize proptypes criteria */
PrivateRoute.propTypes = {
  component: PropTypes.any.isRequired,
  location: PropTypes.object
};

/* initialize default props */
PrivateRoute.defaultProps = {
  location: {}
};

export default withRouter(PrivateRoute);
