import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SearchBar } from '../SearchBar';

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: jest.fn()
    };
  }
}));

describe('SearchBar tests', () => {
  test('check SearchBar input work properly', async () => {
    render(<SearchBar />);
    const input = screen.getByRole('textbox');
    await userEvent.type(input, 'search');
    expect(input).toHaveValue('search');
  });

  test('check skip of not alphabets characters', async () => {
    render(<SearchBar />);
    const input = screen.getByRole('textbox');
    await userEvent.type(input, 'search123');
    expect(input).toHaveValue('search');
  });
});
