import React from 'react';
import { render, screen } from '@testing-library/react';
import { CheckIcon } from '../src/icons/Check';




/**
 * Test the CheckIcon component with a custom className
 * 
 * This test verifies that the CheckIcon component correctly applies
 * a custom className when provided as a prop, overriding the default.
 */
test('CheckIcon applies custom className when provided', () => {
  const customClassName = 'custom-size-8';
  render(<CheckIcon className={customClassName} />);
  
  const svgElement = screen.getByRole('img', { hidden: true });
  expect(svgElement).toHaveClass(customClassName);
  expect(svgElement).not.toHaveClass('size-6');
});
