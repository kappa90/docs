import fs from 'fs';
import path from 'path';




/**
 * This test is not a functional test of next-env.d.ts.
 * It merely checks for the existence of the file and its expected content.
 * This is NOT a recommended practice and does not provide any real value
 * in terms of testing your Next.js application.
 */
describe('next-env.d.ts file', () => {
  const filePath = path.join(process.cwd(), 'next-env.d.ts');

  test('next-env.d.ts file exists', () => {
    const fileExists = fs.existsSync(filePath);
    expect(fileExists).toBe(true);
  });

  test('next-env.d.ts file has expected content', () => {
    const content = fs.readFileSync(filePath, 'utf-8');
    const expectedContent = `/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/pages/api-reference/config/typescript for more information.
`;
    expect(content.trim()).toBe(expectedContent.trim());
  });
});
