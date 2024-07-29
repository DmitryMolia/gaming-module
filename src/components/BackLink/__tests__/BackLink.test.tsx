import React from 'react';
import { render, screen } from '@testing-library/react';
import { BackLink } from '../BackLink';

test('render BackLink with the correct text', () => {
  render(<BackLink />);
  const link = screen.getByText('Go to home');
  expect(link).toBeInTheDocument();
});
