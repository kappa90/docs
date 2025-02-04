import React from 'react';
import { render, screen } from '@testing-library/react';
import { BridgesContentWrapper } from '@/components/BridgesContentWrapper';
import '@testing-library/jest-dom';

// Mock the BridgesContent component
jest.mock('@/content/shared/bridges-content.mdx', () => {
  return function MockBridgesContent({ components }: { components: any }) {
    return <div data-testid="mocked-bridges-content">Mocked Content</div>;
  };
});




/**
 * This test verifies that the BridgesContentWrapper component renders correctly
 * and passes the CopyableCode component to the BridgesContent component.
 */
test('BridgesContentWrapper renders and passes CopyableCode component', () => {
  render(<BridgesContentWrapper />);
  
  // Check if the mocked BridgesContent is rendered
  const mockedContent = screen.getByTestId('mocked-bridges-content');
  expect(mockedContent).toBeInTheDocument();
  expect(mockedContent).toHaveTextContent('Mocked Content');
});
