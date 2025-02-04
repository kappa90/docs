import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Toc } from './Toc';

jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  );
});

jest.mock('@/utils/urls', () => ({
  URLS: {
    discordUrl: 'https://discord.example.com',
    editDocsOnGithub: 'https://github.com/example/repo/edit/main/docs',
  },
}));

jest.mock('@/icons/Pencil', () => ({
  PencilIcon: () => <svg data-testid="pencil-icon" />,
}));

jest.mock('@/icons/ThumbUp', () => ({
  ThumbUpIcon: () => <svg data-testid="thumb-up-icon" />,
}));




/**
 * This test verifies that the Toc component renders correctly when no headings are provided.
 * It checks that the "On this page" section is not rendered, but the feedback and edit links are still present.
 */
test('Toc renders feedback and edit links when no headings are provided', () => {
  render(<Toc headings={[]} />);

  // Check that the "On this page" section is not rendered
  expect(screen.queryByText('On this page')).not.toBeInTheDocument();

  // Check that the feedback link is rendered
  const feedbackLink = screen.getByText('Give feedback on Discord');
  expect(feedbackLink).toBeInTheDocument();
  expect(feedbackLink.closest('a')).toHaveAttribute('href', 'https://discord.example.com');

  // Check that the edit link is rendered
  const editLink = screen.getByText('Edit this page on GitHub');
  expect(editLink).toBeInTheDocument();
  expect(editLink.closest('a')).toHaveAttribute('href', 'https://github.com/example/repo/edit/main/docs');

  // Check that the icons are rendered
  expect(screen.getByTestId('thumb-up-icon')).toBeInTheDocument();
  expect(screen.getByTestId('pencil-icon')).toBeInTheDocument();
});
