import React from 'react';
import './Button.scss';

function Button(props) {
  const { variant, text, padding = 'small', ...rest } = props;
  return (
    <button className={`button ${variant} ${padding}`} {...rest}>
      {text}
    </button>
  );
}

export default Button;
