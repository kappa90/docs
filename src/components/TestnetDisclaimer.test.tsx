import React from 'react';
import { render, screen } from '@testing-library/react';
import { TestnetDisclaimer } from '../components/TestnetDisclaimer';

jest.mock('nextra/components', () => ({
  Callout: ({ children }) => <div data-testid="mocked-callout">{children}</div>,
}));




/**
 * This test checks if the TestnetDisclaimer component renders correctly
 * and contains the expected text content.
 */
test('TestnetDisclaimer renders with correct content', () => {
  render(<TestnetDisclaimer />);
  
  const callout = screen.getByTestId('mocked-callout');
  expect(callout).toBeInTheDocument();
  
  const content = screen.getByText(/This guide currently references Ink Sepolia/);
  expect(content).toBeInTheDocument();
  
  expect(callout).toHaveTextContent('Please be sure to change the necessary parameters based on your network of choice.');
});
