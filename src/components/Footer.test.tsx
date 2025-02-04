import React from 'react';
import { render, screen } from '@testing-library/react';
import { Footer } from '../components/Footer';

// Mock the ThemeToggle component
jest.mock('./ThemeToggle', () => ({
  ThemeToggle: () => <div data-testid="theme-toggle">Theme Toggle</div>,
}));




/**
 * This test checks if the Footer component renders correctly with all expected elements:
 * - The "Made with 💜 by the Ink team" text
 * - The "Privacy Notice" link with the correct href
 * - The "Terms of Service" link with the correct href
 * - The presence of the ThemeToggle component
 */
test('Footer renders correctly with all expected elements', () => {
  render(<Footer />);

  // Check if the text is present
  expect(screen.getByText('Made with 💜 by the Ink team')).toBeInTheDocument();

  // Check if the Privacy Notice link is present and has the correct href
  const privacyLink = screen.getByText('Privacy Notice');
  expect(privacyLink).toBeInTheDocument();
  expect(privacyLink).toHaveAttribute('href', 'https://inkonchain.com/en-US/privacy');

  // Check if the Terms of Service link is present and has the correct href
  const termsLink = screen.getByText('Terms of Service');
  expect(termsLink).toBeInTheDocument();
  expect(termsLink).toHaveAttribute('href', 'https://inkonchain.com/en-US/terms');

  // Check if the ThemeToggle component is rendered
  expect(screen.getByTestId('theme-toggle')).toBeInTheDocument();
});
