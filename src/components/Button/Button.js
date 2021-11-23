import React from 'react';
import './Button.scss';

function Button(props) {
  const { background = 'primary', text, ...rest } = props;
  return (
    <button className={`button ${background}`} {...rest}>
      {text}
    </button>
  );
}

export default Button;
