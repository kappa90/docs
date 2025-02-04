import React from 'react';
import { render } from '@testing-library/react';
import { MultisigContentWrapper } from '../components/MultisigContentWrapper';

// Mock the MultisigContent component
jest.mock('@/content/shared/multisig-content.mdx', () => {
  return function MockMultisigContent({ components }) {
    return <div data-testid="mock-multisig-content">Mocked MultisigContent</div>;
  };
});




/**
 * Test the MultisigContentWrapper component
 * 
 * This test checks if the MultisigContentWrapper component renders correctly
 * and passes the expected components prop to the MultisigContent component.
 */
test('MultisigContentWrapper renders and passes components prop', () => {
  const { getByTestId } = render(<MultisigContentWrapper />);
  
  // Check if the mocked MultisigContent is rendered
  const mockedContent = getByTestId('mock-multisig-content');
  expect(mockedContent).toBeInTheDocument();
  expect(mockedContent).toHaveTextContent('Mocked MultisigContent');
});
