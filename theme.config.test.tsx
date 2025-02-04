import { useRouter } from 'next/router';
import config from './theme.config';

// Mock the useRouter hook
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

// Mock other components and utilities used in the config
jest.mock('@/components/Footer', () => ({ Footer: () => null }));
jest.mock('@/components/Head', () => ({ Head: () => null }));
jest.mock('@/components/SidebarTitleComponent', () => ({ SidebarTitleComponent: () => null }));
jest.mock('@/components/ThemeToggle', () => ({ ThemeToggle: () => null }));
jest.mock('@/components/Toc', () => ({ Toc: () => null }));
jest.mock('@/icons/InkLogo', () => ({ InkLogo: () => null }));
jest.mock('@/utils/urls', () => ({ URLS: { githubOrgUrl: '', repositoryUrl: '' } }));




/**
 * Test the useNextSeoProps function in the theme configuration
 * 
 * This test verifies that the useNextSeoProps function returns the correct
 * title template based on the current path. It checks two scenarios:
 * 1. When the path is the root ("/")
 * 2. When the path is any other route
 */
test('useNextSeoProps returns correct title template based on path', () => {
  // Test case for root path
  (useRouter as jest.Mock).mockReturnValue({ asPath: '/' });
  let result = config.useNextSeoProps();
  expect(result.titleTemplate).toBe('Ink Docs - The Official Developer Guide for Ink');

  // Test case for non-root path
  (useRouter as jest.Mock).mockReturnValue({ asPath: '/some-other-path' });
  result = config.useNextSeoProps();
  expect(result.titleTemplate).toBe('%s | Ink Docs');
});
