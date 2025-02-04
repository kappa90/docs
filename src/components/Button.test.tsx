import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '../components/Button';




/**
 * Test that the Button component correctly applies custom className
 * and maintains its functionality with the custom class.
 */
test('Button applies custom className and maintains functionality', async () => {
  const onClickMock = jest.fn();
  const customClass = 'custom-test-class';

  render(
    <Button variant="primary" onClick={onClickMock} className={customClass}>
      Test Button
    </Button>
  );

  const button = screen.getByRole('button', { name: 'Test Button' });

  // Check if the custom class is applied
  expect(button).toHaveClass(customClass);

  // Check if the button still has its base classes
  expect(button).toHaveClass('font-bold', 'py-5', 'px-8');

  // Check if the primary variant classes are applied
  expect(button).toHaveClass('text-magic-white', 'bg-magic-purple');

  // Test that the onClick function still works
  await userEvent.click(button);
  expect(onClickMock).toHaveBeenCalledTimes(1);
});
