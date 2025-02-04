import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ThemeToggle } from '../components/ThemeToggle';

jest.mock('nextra-theme-docs', () => ({
  useTheme: jest.fn(),
}));




/**
 * This test checks if the ThemeToggle component correctly toggles the theme
 * when clicked, changing from light to dark theme.
 */
test('ThemeToggle changes theme from light to dark when clicked', () => {
  const mockSetTheme = jest.fn();
  const useThemeMock = require('nextra-theme-docs').useTheme;
  useThemeMock.mockReturnValue({
    resolvedTheme: 'light',
    setTheme: mockSetTheme,
  });

  const { getByRole } = render(<ThemeToggle />);
  const toggleButton = getByRole('button');

  fireEvent.click(toggleButton);

  expect(mockSetTheme).toHaveBeenCalledWith('dark');
});
