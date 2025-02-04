import React from 'react';
import { render } from '@testing-library/react';
import { CrosschainContentWrapper } from '../components/CrosschainContentWrapper';
import CopyableCode from "../components/CopyableCode";

jest.mock('@/content/shared/crosschain-content.mdx', () => {
  return {
    __esModule: true,
    default: ({ components }: { components: any }) => (
      <div data-testid="mocked-crosschain-content">
        {JSON.stringify(Object.keys(components))}
      </div>
    ),
  };
});

/**
 * This test verifies that the CrosschainContentWrapper component renders correctly
 * and passes the expected components prop to the CrosschainContent component.
 */
test('CrosschainContentWrapper renders and passes correct props', () => {
  const { getByTestId } = render(<CrosschainContentWrapper />);
  
  const mockedContent = getByTestId('mocked-crosschain-content');
  expect(mockedContent).toBeInTheDocument();
  
  const passedComponentKeys = JSON.parse(mockedContent.textContent || '[]');
  expect(passedComponentKeys).toContain('CopyableCode');
});
