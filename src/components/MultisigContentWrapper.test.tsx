import React from 'react';
import { render } from '@testing-library/react';
import { MultisigContentWrapper } from '../components/MultisigContentWrapper';
import '@testing-library/jest-dom';

/**
 * Test the MultisigContentWrapper component
 * 
 * This test checks if the MultisigContentWrapper component renders without crashing.
 * Since MultisigContent is an MDX file, we can't easily test its content directly.
 * Instead, we'll check if the component renders without throwing an error.
 */
test('MultisigContentWrapper renders without crashing', () => {
  expect(() => render(<MultisigContentWrapper />)).not.toThrow();
});
