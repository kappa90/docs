import { jest } from '@jest/globals';




/**
 * This test verifies that the module declared in ask-cookbook.d.ts can be imported.
 * It checks if the default export from "@cookbookdev/docsbot/react" is defined.
 * Note: This test doesn't fully verify the type declaration, but ensures the module can be imported.
 */
test('Module @cookbookdev/docsbot/react can be imported', async () => {
  const module = await import('@cookbookdev/docsbot/react');
  expect(module.default).toBeDefined();
});
