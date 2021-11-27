import React from 'react';
import './Button.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Button(props) {
  const { variant, children, size = 'small' } = props;

  return (
    <button
      type="button"
      value="button"
      className={`button ${classNames(
        { [variant]: variant },
        { [size]: size }
      )}`}
    >
      {children}
    </button>
  );
}

export { Button };

Button.propTypes = {
  variant: PropTypes.oneOf(['light', 'medium', 'dark', 'white']),
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  size: PropTypes.oneOf(['small', 'large']),
};
