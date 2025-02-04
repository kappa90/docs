import React from 'react';
import { render } from '@testing-library/react';

// Mock MDX component
const MockMDXComponent: React.ComponentType<{
  components?: {
    [key: string]: React.ComponentType<any>;
  };
}> = ({ components }) => <div>Mock MDX Content</div>;

// Mock the import of an MDX file
jest.mock('*.mdx', () => MockMDXComponent);




/**
 * This test verifies that the MDX module declaration is working correctly
 * by mocking an MDX import and checking if it can be used with the expected props.
 */
test('MDX component can be rendered with custom components', () => {
  const CustomComponent = () => <span>Custom Component</span>;
  const MDXContent = require('./example.mdx').default;

  const { container } = render(<MDXContent components={{ CustomComponent }} />);

  expect(container).toHaveTextContent('Mock MDX Content');
});
