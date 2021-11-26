import React from 'react';
import './Button.scss';
import PropTypes from 'prop-types';

function Button(props) {
  const { variant, children, size = 'small' } = props;
  return (
    <button
      role="button"
      type="button"
      value="button"
      className={`button ${variant} ${size}`}
    >
      {children}
    </button>
  );
}

export default Button;

Button.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  size: PropTypes.oneOf(['small', 'medium']),
};
