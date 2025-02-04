import React from 'react';
import { render, screen } from '@testing-library/react';
import { ConnectedPulse } from '../src/icons/ConnectedPulse';




/**
 * Test if ConnectedPulse component renders correctly with a custom className
 * 
 * This test checks if:
 * 1. The component renders without crashing
 * 2. The outer span has the correct base classes and the custom class
 * 3. The component contains two child spans with the correct classes
 */
test('ConnectedPulse renders with custom className', () => {
  const customClass = 'test-custom-class';
  render(<ConnectedPulse className={customClass} />);
  
  // Check if the main span is rendered with the correct classes
  const mainSpan = screen.getByRole('generic');
  expect(mainSpan).toHaveClass('relative', 'flex', 'h-3', 'w-3', customClass);
  
  // Check if the animated ping span is rendered
  const animatedSpan = screen.getByRole('generic', { name: '' });
  expect(animatedSpan).toHaveClass('animate-ping', 'absolute', 'inline-flex', 'h-full', 'w-full', 'rounded-full', 'bg-green-400', 'opacity-75');
  
  // Check if the static green dot span is rendered
  const staticSpan = screen.getAllByRole('generic')[2];
  expect(staticSpan).toHaveClass('relative', 'inline-flex', 'rounded-full', 'h-3', 'w-3', 'bg-green-500');
});
