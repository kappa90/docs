import React from 'react';
import { render } from '@testing-library/react';
import { CommunityContentWrapper } from '../components/CommunityContentWrapper';
import CopyableCode from '../components/CopyableCode';

jest.mock('@/content/shared/community-content.mdx', () => {
  return {
    __esModule: true,
    default: ({ components }: { components: any }) => <div data-testid="mock-community-content">Mocked Content</div>,
  };
});




/**
 * This test verifies that the CommunityContentWrapper component renders
 * without crashing and passes the correct components prop to the CommunityContent component.
 */
test('CommunityContentWrapper renders and passes correct components prop', () => {
  const { getByTestId } = render(<CommunityContentWrapper />);
  
  // Check if the component renders without crashing
  const mockedContent = getByTestId('mock-community-content');
  expect(mockedContent).toBeInTheDocument();
  
  // Verify that the CopyableCode component is passed in the components prop
  expect(CommunityContentWrapper().props.components).toHaveProperty('CopyableCode');
  expect(CommunityContentWrapper().props.components.CopyableCode).toBe(CopyableCode);
});
