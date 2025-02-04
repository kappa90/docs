import { renderHook, act } from '@testing-library/react-hooks';
import { useNetwork, NetworkType } from '../src/utils/networks';




/**
 * Test the addNetwork function of the useNetwork hook
 * 
 * This test simulates adding a network using the addNetwork function
 * provided by the useNetwork hook. It mocks the window.ethereum object
 * to simulate the browser environment and checks if the network is
 * successfully added and selected.
 */
test('addNetwork function adds and selects the network', async () => {
  // Mock window.ethereum
  const mockEthereum = {
    request: jest.fn(),
  };
  global.window = { ethereum: mockEthereum } as any;

  // Set up the mock responses
  mockEthereum.request.mockImplementation((params) => {
    if (params.method === 'wallet_addEthereumChain') {
      return Promise.resolve();
    } else if (params.method === 'wallet_switchEthereumChain') {
      return Promise.resolve();
    } else if (params.method === 'eth_chainId') {
      return Promise.resolve('0xdef1'); // Mainnet chainId
    }
  });

  // Render the hook
  const { result, waitForNextUpdate } = renderHook(() => useNetwork('mainnet' as NetworkType));

  // Initial state
  expect(result.current.isAdded).toBe(false);
  expect(result.current.isSelected).toBe(false);

  // Call addNetwork
  act(() => {
    result.current.addNetwork();
  });

  // Wait for the state to update
  await waitForNextUpdate();

  // Check if the network is added and selected
  expect(result.current.isAdded).toBe(true);
  expect(result.current.isSelected).toBe(true);

  // Verify that the correct methods were called
  expect(mockEthereum.request).toHaveBeenCalledWith({
    method: 'wallet_addEthereumChain',
    params: [expect.any(Object)],
  });
  expect(mockEthereum.request).toHaveBeenCalledWith({
    method: 'wallet_switchEthereumChain',
    params: [{ chainId: '0xdef1' }],
  });
});
