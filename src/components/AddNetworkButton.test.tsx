import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { AddNetworkButton } from '../components/AddNetworkButton';
import { useNetwork } from '@/utils/networks';

// Mock the useNetwork hook
jest.mock('@/utils/networks', () => ({
  useNetwork: jest.fn(),
  networkParams: {
    testnet: { chainName: 'Test Network' },
  },
}));




/**
 * Test the AddNetworkButton component when a wallet is installed but the network is not added.
 * This test verifies that:
 * 1. The correct heading is displayed
 * 2. The "Add Network" button is rendered with the correct network name
 * 3. Clicking the button calls the addNetwork function
 */
test('AddNetworkButton renders correctly when wallet is installed but network is not added', () => {
  // Mock the useNetwork hook return value
  (useNetwork as jest.Mock).mockReturnValue({
    isWalletInstalled: true,
    isAdded: false,
    isSelected: false,
    addNetwork: jest.fn(),
    selectNetwork: jest.fn(),
  });

  // Render the component
  render(<AddNetworkButton network="testnet" heading="Test Network" />);

  // Check if the heading is displayed
  expect(screen.getByText('Test Network')).toBeInTheDocument();

  // Check if the "Add Network" button is rendered
  const addButton = screen.getByRole('button', { name: /Add Test Network/i });
  expect(addButton).toBeInTheDocument();

  // Click the "Add Network" button
  fireEvent.click(addButton);

  // Verify that the addNetwork function was called
  expect(useNetwork().addNetwork).toHaveBeenCalledTimes(1);
});
