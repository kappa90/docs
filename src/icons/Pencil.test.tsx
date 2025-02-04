import React from 'react';
import { render, screen } from '@testing-library/react';
import { PencilIcon } from './Pencil';

/**
 * Test: PencilIcon renders with custom className
 * 
 * This test verifies that the PencilIcon component correctly applies a custom
 * className when provided as a prop. It renders the component with a specific
 * className, then checks if the SVG element in the rendered output has that
 * className applied and that the default class is not applied.
 */
test('PencilIcon renders with custom className', () => {
  const customClassName = 'custom-size-8';
  const { container } = render(<PencilIcon className={customClassName} />);
  
  const svgElement = container.querySelector('svg');
  expect(svgElement).not.toBeNull();
  expect(svgElement).toHaveClass(customClassName);
  expect(svgElement).not.toHaveClass('size-6'); // Ensure default class is not applied
});
