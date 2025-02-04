import React from 'react';
import { render, screen } from '@testing-library/react';
import { Head } from './Head';
import { useRouter } from 'next/router';
import { useConfig } from 'nextra-theme-docs';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

jest.mock('nextra-theme-docs', () => ({
  useConfig: jest.fn(),
}));




/**
 * Tests the Head component with custom frontMatter values.
 * This test checks if the component correctly renders meta tags
 * with custom title, description, and image when provided in frontMatter.
 */
test('Head component renders custom meta tags from frontMatter', () => {
  // Mock the router and config hooks
  (useRouter as jest.Mock).mockReturnValue({
    asPath: '/custom-path',
    defaultLocale: 'en',
    locale: 'en',
  });

  (useConfig as jest.Mock).mockReturnValue({
    frontMatter: {
      title: 'Custom Title',
      description: 'Custom Description',
      image: 'https://example.com/custom-image.png',
    },
  });

  // Render the component
  render(<Head />);

  // Check if the custom title is rendered
  expect(screen.getByName('title')).toHaveAttribute('content', 'Custom Title');

  // Check if the custom description is rendered
  expect(screen.getByName('description')).toHaveAttribute('content', 'Custom Description');

  // Check if the custom image is rendered in og:image and twitter:image
  expect(screen.getByProperty('og:image')).toHaveAttribute('content', 'https://example.com/custom-image.png');
  expect(screen.getByProperty('twitter:image')).toHaveAttribute('content', 'https://example.com/custom-image.png');

  // Check if the URL is correctly constructed
  expect(screen.getByProperty('og:url')).toHaveAttribute('content', 'https://docs.inkonchain.com/custom-path');
  expect(screen.getByProperty('twitter:url')).toHaveAttribute('content', 'https://docs.inkonchain.com/custom-path');
});
