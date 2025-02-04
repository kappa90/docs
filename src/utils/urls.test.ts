import { URLS } from '../utils/urls';




/**
 * This test checks if all URLs in the URLS object are valid URLs.
 * It uses a regular expression to validate each URL.
 */
test('All URLs in URLS object are valid', () => {
  // Regular expression for validating URLs
  const urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;

  // Iterate through all properties in the URLS object
  Object.values(URLS).forEach(url => {
    expect(urlRegex.test(url)).toBe(true);
  });
});
