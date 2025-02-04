import React from 'react';
import { render } from '@testing-library/react';
import { InkLogo } from '../src/icons/InkLogo';
import { useTheme } from 'nextra-theme-docs';

// Mock the useTheme hook
jest.mock('nextra-theme-docs', () => ({
  useTheme: jest.fn(),
}));

// Mock the next/image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
}));




/**
 * Test the InkLogo component with default className
 * 
 * This test verifies that the InkLogo component renders correctly
 * with the default className when no className prop is provided.
 * It also checks if the correct logo source is used based on the theme.
 */
test('InkLogo renders with default className and correct logo source', () => {
  // Mock the useTheme hook to return a dark theme
  (useTheme as jest.Mock).mockReturnValue({ resolvedTheme: 'dark' });

  const { container } = render(<InkLogo />);

  // Check if the Image component is rendered
  const imgElement = container.querySelector('img');
  expect(imgElement).toBeInTheDocument();

  // Check if the default className is applied
  expect(imgElement).toHaveClass('text-magic-purple');

  // Check if the correct logo source is used for dark theme
  expect(imgElement).toHaveAttribute('src', '/logo/ink-logo-dark.svg');

  // Check other attributes
  expect(imgElement).toHaveAttribute('alt', 'Ink logo');
  expect(imgElement).toHaveAttribute('width', '85');
  expect(imgElement).toHaveAttribute('height', '28');
});
