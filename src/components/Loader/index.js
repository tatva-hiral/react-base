import React from 'react';
// import external libraries
import PropTypes from 'prop-types';

function Loader(props) {
  const { isVisible, loaderType } = props;

  if (isVisible) {
    return (
      <div className={`loader-wrapper ${loaderType}`}>
        <div className="loader-block">
          <span className="loader" />
        </div>
      </div>
    );
  }
  return null;
}

/* initialize proptypes criteria */
Loader.propTypes = {
  isVisible: PropTypes.bool,
  loaderType: PropTypes.string
};
/* initialize default props */
Loader.defaultProps = {
  isVisible: false,
  loaderType: ''
};

export default Loader;
