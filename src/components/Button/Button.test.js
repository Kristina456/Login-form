import React from 'react';

import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

import { Light } from './Button.stories';

it('renders the button in the Light state', () => {
  render(<Light {...Light.args} />);
  const button = screen.getByRole('button');

  expect(button).toHaveAttribute('type', 'button');
  expect(button).toHaveTextContent('Button');
});
