import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import CopyButton from './CopyButton';




/**
 * Test the CopyButton component when the copy operation fails.
 * This test checks if the component handles clipboard write errors correctly.
 */
test('CopyButton handles copy failure', async () => {
  // Mock console.error to capture the error message
  const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

  // Mock the clipboard API to simulate a failure
  const mockClipboard = {
    writeText: jest.fn().mockRejectedValue(new Error('Clipboard write failed')),
  };
  Object.defineProperty(navigator, 'clipboard', {
    value: mockClipboard,
    configurable: true,
  });

  render(<CopyButton text="Test text" />);
  
  const button = screen.getByRole('button');
  fireEvent.click(button);

  // Wait for the async operation to complete
  await waitFor(() => {
    expect(consoleSpy).toHaveBeenCalledWith('Failed to copy:', expect.any(Error));
  });

  // Check that the button text hasn't changed to "Copied!"
  expect(screen.queryByText('Copied!')).not.toBeInTheDocument();

  // Restore the console.error mock
  consoleSpy.mockRestore();
});
