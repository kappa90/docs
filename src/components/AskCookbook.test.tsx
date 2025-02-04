import React from 'react';
import { render, screen } from '@testing-library/react';
import { AskCookbook } from './AskCookbook';
import BaseAskCookbook from "@cookbookdev/docsbot/react";

jest.mock("@cookbookdev/docsbot/react", () => ({
  __esModule: true,
  default: jest.fn(() => <div data-testid="mock-base-ask-cookbook" />),
}));




/**
 * This test verifies that the AskCookbook component renders the BaseAskCookbook
 * component with the correct API key prop.
 */
test('AskCookbook renders BaseAskCookbook with correct API key', () => {
  render(<AskCookbook />);
  
  expect(screen.getByTestId('mock-base-ask-cookbook')).toBeInTheDocument();
  expect(BaseAskCookbook).toHaveBeenCalledWith(
    {
      apiKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NzNlNTU5ZjBjOWIwZGRjZTE5OTAwMTIiLCJpYXQiOjE3MzIxMzgzOTksImV4cCI6MjA0NzcxNDM5OX0.L7-tnJwEIoDwxtju0yr5T4Xb9ahjIae8ob4dVbzoADM"
    },
    {}
  );
});
