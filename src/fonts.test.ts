import { inter, plus_jakarta_sans } from './fonts';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';

jest.mock('next/font/google', () => ({
  Inter: jest.fn(() => ({ className: 'mocked-inter' })),
  Plus_Jakarta_Sans: jest.fn(() => ({ className: 'mocked-plus-jakarta-sans' }))
}));




/**
 * Test the exported font objects to ensure they exist and have expected properties.
 * This test verifies that both 'inter' and 'plus_jakarta_sans' font objects are
 * created and exported correctly from the fonts module.
 */
test('font objects are created and exported correctly', () => {
  // Test inter font
  expect(inter).toBeDefined();
  expect(inter).toHaveProperty('className');
  expect(Inter).toHaveBeenCalledWith({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
  });

  // Test plus_jakarta_sans font
  expect(plus_jakarta_sans).toBeDefined();
  expect(plus_jakarta_sans).toHaveProperty('className');
  expect(Plus_Jakarta_Sans).toHaveBeenCalledWith({
    subsets: ['latin'],
    variable: '--font-plus-jakarta-sans',
    display: 'swap',
  });
});
