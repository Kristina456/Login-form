import React from 'react';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
};

// Small buttons
export const Light = () => <Button variant="btn-sml-light">Submit</Button>;
export const Medium = () => <Button variant="btn-sml-medium">Submit</Button>;
export const Dark = () => <Button variant="btn-small-dark">Submit</Button>;
export const white = () => <Button variant="btn-sml-white">Submit</Button>;
