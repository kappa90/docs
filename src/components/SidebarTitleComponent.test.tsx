import React from 'react';
import { render, screen } from '@testing-library/react';
import { SidebarTitleComponent } from './SidebarTitleComponent';

// Mock the useRouter hook
jest.mock('next/router', () => ({
  useRouter: () => ({
    asPath: '/mock-path',
  }),
}));




/**
 * Tests the SidebarTitleComponent when the type prop is set to "separator".
 * This scenario should render a div with the title text and specific styling for a separator.
 */
test('renders separator correctly', () => {
  const title = 'Separator Title';
  render(<SidebarTitleComponent title={title} type="separator" route="/mock-route" />);

  const separatorElement = screen.getByText(title);
  expect(separatorElement).toBeInTheDocument();
  expect(separatorElement).toHaveClass('font-bold');
  expect(separatorElement).toHaveClass('text-black');
  expect(separatorElement).toHaveClass('dark:text-magic-white');
});
