import { Inter } from "next/font/google";
import { inter } from "../src/fonts";

jest.mock("next/font/google", () => ({
  Inter: jest.fn(() => ({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
  })),
}));




/**
 * Test the 'inter' font object to ensure it's created with the correct properties.
 * This test verifies that the Inter font is initialized with the expected
 * subsets, variable name, and display property.
 */
test("inter font is created with correct properties", () => {
  expect(inter).toEqual({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
  });

  expect(Inter).toHaveBeenCalledWith({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
  });
});
