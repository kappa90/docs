import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { DownloadButton } from '../components/DownloadButton';
import { Button } from '../components/Button';

// Mock the Button component
jest.mock('../components/Button', () => ({
  Button: jest.fn(({ children, ...props }) => <button {...props}>{children}</button>),
}));

// Mock the DownloadIcon component
jest.mock('../icons/Download', () => ({
  DownloadIcon: () => <span data-testid="download-icon" />,
}));




/**
 * Test if the DownloadButton component renders correctly with provided props
 */
test('DownloadButton renders with correct props', () => {
  const props = {
    sourceFilePath: '/path/to/file',
    destinationFileName: 'file.pdf',
    label: 'Download PDF',
    size: '5 MB',
  };

  render(<DownloadButton {...props} />);

  // Check if the button is rendered
  const button = screen.getByRole('button');
  expect(button).toBeInTheDocument();

  // Check if the label is rendered correctly
  expect(screen.getByText(props.label)).toBeInTheDocument();

  // Check if the size is rendered correctly
  expect(screen.getByText(props.size)).toBeInTheDocument();

  // Check if the DownloadIcon is rendered
  expect(screen.getByTestId('download-icon')).toBeInTheDocument();

  // Check if the Button component is called with the correct variant
  expect(Button).toHaveBeenCalledWith(
    expect.objectContaining({ variant: 'primary' }),
    expect.anything()
  );
});
