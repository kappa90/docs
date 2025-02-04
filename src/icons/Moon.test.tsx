import React from 'react';
import { render, screen } from '@testing-library/react';
import { MoonIcon } from '../src/icons/Moon';




/**
 * Test if the MoonIcon component renders with a custom className
 */
test('MoonIcon renders with custom className', () => {
  const customClass = 'custom-moon-icon';
  render(<MoonIcon className={customClass} />);
  
  const svgElement = screen.getByRole('img', { hidden: true });
  expect(svgElement).toHaveClass(customClass);
  expect(svgElement).not.toHaveClass('w-6 h-6');
});
