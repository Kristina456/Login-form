import React from 'react';
import './Button.scss';
import PropTypes from 'prop-types';

function Button(props) {
  const { variant, text, size = 'small', ...rest } = props;
  return (
    <button className={`button ${variant} ${size}`} {...rest}>
      {text}
    </button>
  );
}

export default Button;

Button.propTypes = {
  variant: PropTypes.string,
  text: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium']),
};
