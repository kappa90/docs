import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CopyableCode from '../src/components/CopyableCode';

// Mock the CopyButton component since we're not testing its functionality here
jest.mock('./CopyButton', () => {
  return function MockCopyButton() {
    return <button>Copy</button>;
  };
});




/**
 * Test the CopyableCode component when an href prop is provided.
 * This test ensures that:
 * 1. The component renders an anchor tag when href is provided
 * 2. The anchor tag has the correct href attribute
 * 3. The code content is rendered within the anchor tag
 * 4. The CopyButton is rendered
 */
test('renders CopyableCode with href as a link', () => {
  const code = 'console.log("Hello, World!");';
  const href = 'https://example.com';
  
  render(<CopyableCode code={code} href={href} />);
  
  // Check if the anchor tag is rendered with the correct href
  const linkElement = screen.getByRole('link');
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveAttribute('href', href);
  
  // Check if the code content is rendered within the link
  const codeElement = screen.getByText(code);
  expect(codeElement).toBeInTheDocument();
  expect(linkElement).toContainElement(codeElement);
  
  // Check if the CopyButton is rendered
  const copyButton = screen.getByRole('button', { name: /copy/i });
  expect(copyButton).toBeInTheDocument();
});
