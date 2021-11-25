import React from 'react';
import './Icon.scss';
import PropTypes from 'prop-types';

function Icon(props) {
  const { variant, ...rest } = props;
  return <img className={`icon ${variant}`}></img>;
}

export default Icon;
